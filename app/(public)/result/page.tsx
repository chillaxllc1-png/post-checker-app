import { Suspense } from "react";
import ResultClient from "./ResultClient";

export const dynamic = "force-dynamic";

export default function ResultPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <Suspense fallback={null}>
                <ResultClient />
            </Suspense>
        </main>
    );
}