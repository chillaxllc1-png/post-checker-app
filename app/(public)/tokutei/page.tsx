export default function TokuteiPage() {
    return (
        <main className="min-h-screen px-6 py-12">
            <div className="mx-auto max-w-md flex flex-col gap-5 text-sm text-zinc-700 leading-relaxed">

                <h1 className="text-base text-zinc-900">
                    特定商取引法に基づく表記
                </h1>

                <div className="flex flex-col gap-2">
                    <p>
                        <span className="font-medium">サービス名：</span>
                        Post Checker
                    </p>

                    <p>
                        <span className="font-medium">販売事業者名：</span>
                        合同会社 chillax
                    </p>

                    <p>
                        <span className="font-medium">運営責任者：</span>
                        矢嶋 弘和
                    </p>

                    <p>
                        <span className="font-medium">所在地：</span>
                        請求があった場合、法令に基づき遅滞なく開示いたします。
                    </p>

                    <p>
                        <span className="font-medium">連絡先：</span>
                        <a
                            href="mailto:chillaxllc1@gmail.com"
                            className="underline underline-offset-4"
                        >
                            chillaxllc1@gmail.com
                        </a>
                    </p>

                    <p>
                        <span className="font-medium">販売価格：</span>
                        料金ページに記載の金額（税込・役務提供に対する対価）
                    </p>

                    <p>
                        <span className="font-medium">商品代金以外の必要料金：</span>
                        インターネット接続にかかる通信費用は利用者のご負担となります。
                    </p>

                    <p>
                        <span className="font-medium">支払方法：</span>
                        クレジットカード決済（決済代行サービスを利用）
                    </p>

                    <p>
                        <span className="font-medium">支払時期：</span>
                        初回は購入手続き完了時にお支払いが確定し、以後は契約期間に応じて自動更新されます。
                    </p>

                    <p>
                        <span className="font-medium">役務提供時期：</span>
                        決済完了後、確認履歴の記録等の役務を利用可能となります。
                    </p>

                    <p>
                        <span className="font-medium">返品・キャンセルについて：</span>
                        本サービスはデジタルサービスの性質上、
                        決済完了後の返品・返金には対応しておりません。
                    </p>
                </div>

                <p className="text-xs text-zinc-400 pt-4">
                    ※ 本ページの内容は、提供内容の変更等により更新される場合があります。
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