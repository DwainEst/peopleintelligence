import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" aria-hidden="true" />
            <h1 className="text-2xl font-bold text-gray-900">Page not found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Sorry, the page you are looking for doesn't exist or has moved.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="/" className="underline text-[#0F3010]">Executive leadership &amp; EQ coaching</a>
            </li>
            <li>
              <a href="/christian-coaching" className="underline text-[#0F3010]">Christian leadership coaching</a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
