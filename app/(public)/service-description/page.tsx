export default function ServiceDescriptionPage() {
    return (
        <main className="min-h-screen px-6 py-12">
            <div className="mx-auto max-w-2xl flex flex-col gap-6 text-sm text-zinc-700 leading-relaxed">

                <h1 className="text-base text-zinc-900">
                    サービス説明（Post Checker）
                </h1>

                <p>
                    本サービス（Post Checker）は、
                    X（旧Twitter）アカウント運用において、
                    投稿前に所定の確認行為を行ったという事実を
                    記録するためのWebサービスです。
                </p>

                <p>
                    本サービスは、
                    投稿内容の可否判断、アカウントの安全性評価、
                    凍結・制限の防止や解除、
                    またはその成功を保証するものではありません。
                </p>

                <p>
                    また、本サービスは
                    X（旧Twitter）およびその運営会社とは一切関係のない、
                    独立した第三者サービスであり、
                    プラットフォームの公式判断や運営方針に
                    影響を与えるものではありません。
                </p>

                <h2 className="text-sm text-zinc-900 pt-4">
                    提供内容
                </h2>

                <ul className="list-disc pl-5">
                    <li>
                        投稿前に確認を行ったという行為の成立
                        （確認プロセスを経たという事実の記録）
                    </li>
                    <li>
                        有料プランでは、
                        その確認履歴をアカウント単位で記録
                    </li>
                    <li>
                        必要に応じて、
                        事象発生後（凍結・制限等）における
                        情報整理および運用方針の再確認支援
                    </li>
                </ul>

                <h2 className="text-sm text-zinc-900 pt-4">
                    提供しない内容
                </h2>

                <ul className="list-disc pl-5">
                    <li>投稿内容の是非、違反有無、適法性の判断</li>
                    <li>アカウント状態や危険度の診断・評価</li>
                    <li>凍結・制限の回避、解除、復旧の保証</li>
                    <li>成功率や成果に関する数値提示</li>
                </ul>

                <p className="pt-4">
                    本サービスの課金は、
                    特定の成果やアカウント状態の変化に対する対価ではなく、
                    確認行為の記録および状況整理・支援という
                    役務提供に対する対価です。
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