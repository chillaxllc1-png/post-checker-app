export default function PrivacyPage() {
    return (
        <main className="min-h-screen px-6 py-12">
            <div className="mx-auto max-w-2xl flex flex-col gap-6 text-sm text-zinc-700 leading-relaxed">

                <h1 className="text-base text-zinc-900">
                    プライバシーポリシー
                </h1>

                <p className="text-xs text-zinc-500">
                    最終更新日：2026年1月21日
                </p>

                {/* 1. 基本方針 */}
                <section className="flex flex-col gap-2">
                    <h2 className="font-medium text-zinc-900">1. 基本方針</h2>
                    <p>
                        本サービス（Post Checker）は、利用者の入力内容および行為を尊重し、
                        必要以上の個人情報を取得・利用しない方針で運用します。
                    </p>
                    <p>
                        本サービスは、X（旧Twitter）およびその関連会社とは一切関係のない、
                        非公式の第三者サービスです。
                    </p>
                </section>

                {/* 2. 投稿内容の取り扱い */}
                <section className="flex flex-col gap-2">
                    <h2 className="font-medium text-zinc-900">2. 投稿内容の取り扱い</h2>
                    <p>
                        利用者が入力した投稿内容は、
                        <strong>原則として保存しません</strong>。
                    </p>
                    <p>
                        ただし、サービスの安定運用・品質改善・不具合調査のため、
                        投稿内容そのものを含まない匿名の利用ログ
                        （操作イベント、確認行為の実行有無等）を取得する場合があります。
                    </p>
                    <p className="text-xs text-zinc-500">
                        ※ 取得するログは、個人を特定する目的では利用しません。
                    </p>
                </section>

                {/* 3. 取得する情報 */}
                <section className="flex flex-col gap-2">
                    <h2 className="font-medium text-zinc-900">3. 取得する可能性のある情報</h2>
                    <p>本サービスでは、必要な範囲で以下の情報を取得する場合があります。</p>
                    <ul className="list-disc pl-5">
                        <li>匿名のアクセス情報（閲覧ページ、利用頻度等）</li>
                        <li>匿名の操作・イベント情報（確認行為の実行、モード選択等）</li>
                        <li>技術的情報（ブラウザ、OS、画面サイズ等）</li>
                        <li>エラー情報（不具合調査のための例外情報）</li>
                    </ul>
                </section>

                {/* 4. 利用目的 */}
                <section className="flex flex-col gap-2">
                    <h2 className="font-medium text-zinc-900">4. 利用目的</h2>
                    <ul className="list-disc pl-5">
                        <li>本サービスの提供・維持・保護</li>
                        <li>機能改善およびユーザー体験の向上</li>
                        <li>不正利用の防止</li>
                        <li>問い合わせ対応および障害対応</li>
                    </ul>
                </section>

                {/* 5. 保存期間 */}
                <section className="flex flex-col gap-2">
                    <h2 className="font-medium text-zinc-900">5. 保存期間</h2>
                    <p>
                        取得したログ情報は、運用上必要な期間に限り保持し、
                        不要となった場合は順次削除または統計化します。
                    </p>
                </section>

                {/* 6. 第三者提供 */}
                <section className="flex flex-col gap-2">
                    <h2 className="font-medium text-zinc-900">6. 第三者提供</h2>
                    <p>
                        取得した情報を、個人を特定できる形で第三者に提供することはありません。
                        ただし、法令に基づく要請がある場合はこの限りではありません。
                    </p>
                </section>

                {/* 7. 外部サービス */}
                <section className="flex flex-col gap-2">
                    <h2 className="font-medium text-zinc-900">7. 外部サービスの利用</h2>
                    <p>
                        本サービスでは、アクセス解析やログ収集等の目的で、
                        外部サービスを利用する場合があります。
                        その場合も、本ポリシーの範囲内で適切に取り扱います。
                    </p>
                </section>

                {/* 8. 安全管理 */}
                <section className="flex flex-col gap-2">
                    <h2 className="font-medium text-zinc-900">8. 安全管理</h2>
                    <p>
                        取得した情報について、漏えい・改ざん・不正アクセス等を防止するため、
                        合理的な安全管理措置を講じます。
                    </p>
                </section>

                {/* 9. お問い合わせ */}
                <section className="flex flex-col gap-2">
                    <h2 className="font-medium text-zinc-900">9. お問い合わせ</h2>
                    <p>
                        本ポリシーに関するお問い合わせは、
                        サイト内の「お問い合わせ」ページよりご連絡ください。
                    </p>
                </section>

                {/* 10. 改定 */}
                <section className="flex flex-col gap-2">
                    <h2 className="font-medium text-zinc-900">10. 改定</h2>
                    <p>
                        本ポリシーは、必要に応じて変更されることがあります。
                        変更後の内容は、本ページに掲載した時点で適用されます。
                    </p>
                </section>

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