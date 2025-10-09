import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactSchema, type ContactSubmission } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // In a real application, you would send an email notification here
      console.log(`New contact submission from ${validatedData.firstName} ${validatedData.lastName} (${validatedData.variant} variant)`);
      
      res.json({
        success: true,
        message: "Contact submission received successfully"
      });
      
    } catch (error) {
      console.error("Contact form submission error:", error);
      
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({
          success: false,
          message: "Invalid form data"
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
