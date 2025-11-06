import { Metadata } from "next";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";
import React from "react";

export const metadata: Metadata = {
  title: "Licenses",
  openGraph: {
    images: [`/seo.jpg`]
  }
};

export default function Home() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="mb-4 text-3xl font-bold lg:text-4xl">Licenses</h1>
          <p className="text-muted-foreground text-lg text-balance">
            Browse what each license allows to make it easy to choose what you need
          </p>
        </header>

        <article>
          <div className="rounded-lg border">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell className="text-center">Standard</TableCell>
                  <TableCell className="text-center">Extended</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Number of end products</TableCell>
                  <TableCell className="text-center">1</TableCell>
                  <TableCell className="text-center">Unlimited</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Use for personal or a client</TableCell>
                  <TableCell className="text-center">✅</TableCell>
                  <TableCell className="text-center">✅</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Use in a free end product
                    <br />
                    <em>(Can have multiple users)</em>
                  </TableCell>
                  <TableCell className="text-center">✅</TableCell>
                  <TableCell className="text-center">✅</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Use in an end product that is “sold”
                    <br />
                    <em>(Can have multiple paying users)</em>
                  </TableCell>
                  <TableCell className="text-center">❌</TableCell>
                  <TableCell className="text-center">✅</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Use in derivative themes or “generators”</TableCell>
                  <TableCell className="text-center">❌</TableCell>
                  <TableCell className="text-center">❌</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="text-muted-foreground mt-4 text-xs">
            * You may charge your client for your services to create an end product, even under the
            Regular License. But you can’t use one of our Standard Licenses on multiple clients or
            jobs.
          </div>
        </article>
      </div>
    </section>
  );
}
