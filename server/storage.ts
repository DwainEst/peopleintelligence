import { type ContactSubmission } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactSubmission(submission: ContactSubmission): Promise<ContactSubmission & { id: string; submittedAt: Date }>;
  getContactSubmissions(): Promise<Array<ContactSubmission & { id: string; submittedAt: Date }>>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<string, ContactSubmission & { id: string; submittedAt: Date }>;

  constructor() {
    this.contactSubmissions = new Map();
  }

  async createContactSubmission(submission: ContactSubmission): Promise<ContactSubmission & { id: string; submittedAt: Date }> {
    const id = randomUUID();
    const submissionWithMeta = {
      ...submission,
      id,
      submittedAt: new Date(),
    };
    
    this.contactSubmissions.set(id, submissionWithMeta);
    return submissionWithMeta;
  }

  async getContactSubmissions(): Promise<Array<ContactSubmission & { id: string; submittedAt: Date }>> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.submittedAt.getTime() - a.submittedAt.getTime()
    );
  }
}

export const storage = new MemStorage();
