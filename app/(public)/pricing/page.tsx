export default function PricingPage() {
    return (
        <main className="min-h-screen px-6 py-12">
            <div className="mx-auto max-w-md flex flex-col gap-6 text-sm text-zinc-700 leading-relaxed">

                <h1 className="text-base text-zinc-900">
                    料金について
                </h1>

                <p>
                    Post Checker は、
                    投稿前に確認行為を行ったという事実を
                    記録するためのWebサービスです。
                </p>

                <p>
                    現在提供している有料プランは、以下の1種類です。
                </p>

                <div className="border rounded-lg p-4 text-center">
                    <div className="text-sm text-zinc-900">
                        運用記録モード
                    </div>
                    <div className="text-lg font-medium pt-1">
                        月額 1,280円（税込）
                    </div>
                    <div className="text-[11px] text-zinc-500 pt-2">
                        ※ 月額課金制（自動更新）
                    </div>
                </div>

                {/* ★ 追加：決済状態の明示（審査用に重要） */}
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                    ※ 現在、決済機能は準備中です。
                    <br />
                    有料プランの利用開始および決済は、
                    今後「運用記録モード」画面から行われる予定です。
                </p>

                <p className="text-[11px] text-zinc-500 leading-relaxed">
                    ※ 本料金は、成果や結果を保証するものではなく、
                    投稿前に確認行為を行ったという事実の記録、
                    およびそれに付随する役務提供に対する対価です。
                    <br />
                    ※ 解約方法および支払条件の詳細は、
                    利用規約・特定商取引法に基づく表記をご確認ください。
                </p>

                {/* 戻る動線（最小・誘導しない） */}
                <a
                    href="/"
                    className="pt-6 text-xs text-zinc-400 underline underline-offset-4 text-center"
                >
                    トップページに戻る
                </a>

            </div>
        </main>
    );
}