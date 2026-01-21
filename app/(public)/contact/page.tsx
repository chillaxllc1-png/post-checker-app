export default function ContactPage() {
    return (
        <main className="min-h-screen px-6 py-12">
            <div className="mx-auto max-w-md flex flex-col gap-6 text-sm text-zinc-700 leading-relaxed text-center">

                <h1 className="text-base text-zinc-900">
                    お問い合わせ
                </h1>

                <p>
                    本サービス（Post Checker）に関する
                    ご質問・ご連絡は、下記メールアドレスまでお願いいたします。
                </p>

                <p className="text-sm">
                    <a
                        href="mailto:chillaxllc1@gmail.com"
                        className="underline underline-offset-4"
                    >
                        chillaxllc1@gmail.com
                    </a>
                </p>

                <p className="text-xs text-zinc-400">
                    ※ 本サービスの仕様やご利用に関する一般的なお問い合わせを対象としています。
                    <br />
                    ※ 個別の投稿内容や結果に関する判断・保証には
                    お答えできません。
                </p>

                <a
                    href="/"
                    className="pt-6 text-xs text-zinc-400 underline underline-offset-4"
                >
                    トップページに戻る
                </a>

            </div>
        </main>
    );
}