/* ============================================================
   Onboarding Guide - Term Data
   ============================================================ */

const CATEGORIES = [
  { id: 'all',       label: 'すべて',            icon: '📋', color: '#64748b' },
  { id: 'seo',       label: 'SEO・最適化',        icon: '🔍', color: '#2563eb' },
  { id: 'server',    label: 'サーバー・インフラ',  icon: '🖥️', color: '#059669' },
  { id: 'design',    label: 'デザイン・UI',        icon: '🎨', color: '#7c3aed' },
  { id: 'tool',      label: 'ツール・技術',        icon: '🛠️', color: '#d97706' },
  { id: 'biz',       label: 'ビジネス・業務',      icon: '💼', color: '#dc2626' },
  { id: 'structure', label: 'サイト構造・WF',      icon: '🗺️', color: '#0891b2' },
];

const TERMS = [

  /* ─── SEO ─────────────────────────────────────────────── */
  {
    id: 'seo-types', category: 'seo',
    title: 'SEO / AIO / GEO / AEO',
    shortDesc: '検索・AI・生成エンジン最適化の4つのアプローチ',
    tags: ['SEO','AIO','GEO','AEO','最適化','検索エンジン','AI'],
    content: `
<div class="dc-section">
  <h2>概要</h2>
  <p>Webサイトやコンテンツを「見つけてもらう」ための最適化手法は、AIの普及により4種類に進化しています。</p>
</div>
<div class="dc-section">
  <h2>4つの最適化</h2>
  <div class="comparison-grid" style="grid-template-columns:repeat(2,1fr)">
    <div class="comparison-card" style="border-color:#3b82f6">
      <h4 style="color:#2563eb">🔍 SEO（検索エンジン最適化）</h4>
      <p>GoogleなどのWebサイトの検索結果で上位に表示されることを目指す。最も基本的な手法。</p>
    </div>
    <div class="comparison-card" style="border-color:#7c3aed">
      <h4 style="color:#7c3aed">🤖 AIO（AI最適化）</h4>
      <p>AIに「理解・認識・推薦」されやすいようにコンテンツ構造を最適化することを目指す。</p>
    </div>
    <div class="comparison-card" style="border-color:#059669">
      <h4 style="color:#059669">✍️ GEO（生成エンジン最適化）</h4>
      <p>長文の回答やリサーチの過程で、AIが生成する回答に<strong>引用・参照</strong>されることを目指す。</p>
    </div>
    <div class="comparison-card" style="border-color:#d97706">
      <h4 style="color:#d97706">💬 AEO（アンサーエンジン最適化）</h4>
      <p>AIが検索結果画面で直接的な「答え」を提示する際に<strong>選ばれる</strong>ことを目指す。</p>
    </div>
  </div>
</div>
<div class="dc-section">
  <h2>比較表</h2>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>手法</th><th>目標</th><th>対象</th></tr></thead>
      <tbody>
        <tr><td>SEO</td><td>検索順位上位表示</td><td>Google・Yahoo等の検索エンジン</td></tr>
        <tr><td>AIO</td><td>AIへの理解・推薦</td><td>ChatGPT・Gemini等のAI</td></tr>
        <tr><td>GEO</td><td>生成回答への引用</td><td>生成AIの長文回答</td></tr>
        <tr><td>AEO</td><td>直接的な「答え」として選択</td><td>AI検索結果の直接表示枠</td></tr>
      </tbody>
    </table>
  </div>
</div>`
  },

  {
    id: 'eeat', category: 'seo',
    title: 'E-E-A-T',
    shortDesc: 'Googleの品質評価4指標（経験・専門性・権威性・信頼性）',
    tags: ['E-E-A-T','経験','専門性','権威性','信頼性','Google','品質評価'],
    content: `
<div class="dc-section">
  <h2>E-E-A-Tとは</h2>
  <p>Googleがコンテンツの品質を評価するために用いる4つの指標です。検索順位に大きく影響します。</p>
  <div class="highlight hl-blue">「E-E-A-T」= <strong>E</strong>xperience・<strong>E</strong>xpertise・<strong>A</strong>uthoritativeness・<strong>T</strong>rust の頭文字</div>
</div>
<div class="dc-section">
  <h2>4つの要素</h2>
  <div class="step-list">
    <div class="step-item">
      <div class="step-num">E</div>
      <div class="step-content"><strong>Experience（経験）</strong><span>実際の経験に基づいたコンテンツかどうか。体験談・実績・事例など一次情報が重要。</span></div>
    </div>
    <div class="step-item">
      <div class="step-num">E</div>
      <div class="step-content"><strong>Expertise（専門性）</strong><span>その分野に対する深い知識・スキルがあるかどうか。専門家による情報かを問われる。</span></div>
    </div>
    <div class="step-item">
      <div class="step-num">A</div>
      <div class="step-content"><strong>Authoritativeness（権威性）</strong><span>その分野での知名度・信頼度。他サイトからの被リンク、実績の公開などが評価される。</span></div>
    </div>
    <div class="step-item">
      <div class="step-num">T</div>
      <div class="step-content"><strong>Trust（信頼性）</strong><span>サイト全体の透明性・正確性・安全性。4要素の中で最も重要とされている。</span></div>
    </div>
  </div>
</div>
<div class="dc-section">
  <h2>なぜ重要か</h2>
  <div class="highlight hl-yellow">特に医療・金融・法律などの「YMYL（Your Money or Your Life）」分野では E-E-A-T の評価が特に厳しくなります。</div>
</div>`
  },

  {
    id: 'cwv', category: 'seo',
    title: 'Core Web Vitals（CWV）',
    shortDesc: 'サイトの使い勝手を測る3つのUX指標',
    tags: ['Core Web Vitals','CWV','LCP','INP','CLS','パフォーマンス','UX'],
    content: `
<div class="dc-section">
  <h2>Core Web Vitalsとは</h2>
  <p>Googleが定める、Webサイトの「使い勝手」を測定するための3つのUX（ユーザー体験）指標です。SEOのランキング要因にも含まれます。</p>
</div>
<div class="dc-section">
  <h2>3つの指標</h2>
  <div class="comparison-grid" style="grid-template-columns:repeat(3,1fr)">
    <div class="comparison-card" style="border-color:#3b82f6;text-align:center">
      <div style="font-size:28px;font-weight:900;color:#2563eb;margin-bottom:8px">LCP</div>
      <h4>Largest Contentful Paint</h4>
      <p style="font-size:13px">ページの中で最も大きなコンテンツ（画像・動画など）が表示されるまでの速度。<br><strong>目安：2.5秒以内</strong></p>
    </div>
    <div class="comparison-card" style="border-color:#7c3aed;text-align:center">
      <div style="font-size:28px;font-weight:900;color:#7c3aed;margin-bottom:8px">INP</div>
      <h4>Interaction to Next Paint</h4>
      <p style="font-size:13px">クリック・タッチ・キーボード操作など、ユーザーの操作に対してサイトが視覚的に反応するまでの時間。<br><strong>目安：200ms以内</strong></p>
    </div>
    <div class="comparison-card" style="border-color:#059669;text-align:center">
      <div style="font-size:28px;font-weight:900;color:#059669;margin-bottom:8px">CLS</div>
      <h4>Cumulative Layout Shift</h4>
      <p style="font-size:13px">ページ読み込み中に発生するレイアウトの「ズレ」の量をスコア化。広告や画像の遅延読み込みで発生しやすい。<br><strong>目安：0.1以下</strong></p>
    </div>
  </div>
</div>
<div class="dc-section">
  <h2>改善のポイント</h2>
  <ul>
    <li><strong>LCP改善</strong>：画像の最適化（WebP形式・遅延読み込み）、サーバー応答速度の改善</li>
    <li><strong>INP改善</strong>：JavaScriptの処理を軽量化、重い処理をバックグラウンドへ</li>
    <li><strong>CLS改善</strong>：画像・広告に縦横サイズを明示的に指定する</li>
  </ul>
</div>`
  },

  {
    id: 'canonical', category: 'seo',
    title: 'カノニカルタグ',
    shortDesc: '重複コンテンツのSEO評価を1ページに集約するHTMLタグ',
    tags: ['canonical','カノニカル','SEO','重複','URL','head'],
    content: `
<div class="dc-section">
  <h2>カノニカルタグとは</h2>
  <p>同じ（または類似した）内容を持つページが複数存在するとき、「どれが正しいページか」を検索エンジンに伝えるためのHTMLタグです。</p>
  <div class="highlight hl-blue">SEO評価を分散させずに、1つのページに集約させることができます。</div>
</div>
<div class="dc-section">
  <h2>なぜ必要か</h2>
  <p>以下のようなケースで、検索エンジンが「別ページ」と判断してしまう場合があります：</p>
  <ul>
    <li>SNS用のパラメータ：<code>?ref=twitter</code>、<code>?utm=ad</code> など</li>
    <li>PCとスマホで別URLが存在する場合</li>
    <li>wwwあり・なし（<code>example.com</code> と <code>www.example.com</code>）</li>
    <li>http・httpsの混在</li>
  </ul>
</div>
<div class="dc-section">
  <h2>記述方法</h2>
  <p>HTMLの <code>&lt;head&gt;</code> タグ内に記述します：</p>
  <div class="code-block">&lt;link rel="canonical" href="https://example.com/page"&gt;</div>
  <div class="highlight hl-green">「このURLを正しいページとして扱ってください」と検索エンジンに伝えることができます。</div>
</div>`
  },

  {
    id: 'ogp', category: 'seo',
    title: 'OGP（Open Graph Protocol）',
    shortDesc: 'SNSシェア時にタイトル・画像・説明文を表示するための仕組み',
    tags: ['OGP','SNS','Twitter','Facebook','シェア','メタタグ'],
    content: `
<div class="dc-section">
  <h2>OGPとは</h2>
  <p>WebページのURLがX（旧Twitter）・Facebook・LINEなどのSNSに投稿されたとき、「タイトル」「画像」「説明文」などの補足情報を自動表示するための仕組みです。</p>
</div>
<div class="dc-section">
  <h2>主なプロパティ</h2>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>プロパティ</th><th>内容</th></tr></thead>
      <tbody>
        <tr><td>og:title</td><td>ページのタイトル</td></tr>
        <tr><td>og:description</td><td>ページの説明文</td></tr>
        <tr><td>og:image</td><td>サムネイル画像のURL</td></tr>
        <tr><td>og:url</td><td>正規URL</td></tr>
        <tr><td>og:type</td><td>コンテンツの種類（website / article 等）</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="dc-section">
  <h2>記述例</h2>
  <div class="code-block">&lt;meta property="og:title" content="ページタイトル"&gt;
&lt;meta property="og:description" content="ページの説明"&gt;
&lt;meta property="og:image" content="https://example.com/image.jpg"&gt;
&lt;meta property="og:url" content="https://example.com/page"&gt;</div>
</div>`
  },

  {
    id: 'structured-markup', category: 'seo',
    title: '構造化マークアップ',
    shortDesc: '検索エンジンにコンテンツ内容をわかりやすく伝える記述方法',
    tags: ['構造化マークアップ','schema.org','検索エンジン','SEO','microdata'],
    content: `
<div class="dc-section">
  <h2>構造化マークアップとは</h2>
  <p>サイトのコンテンツ内容を検索エンジンにわかりやすく認識させるための記述方法です。schema.orgの語彙を使って、「これは会社名です」「これは商品名です」と明示します。</p>
</div>
<div class="dc-section">
  <h2>通常のHTMLとの違い</h2>
  <h3>通常のHTML</h3>
  <div class="code-block">&lt;div&gt;株式会社〇〇&lt;/div&gt;</div>
  <p>→ 検索エンジンにはただのテキストにしか見えない</p>
  <h3>構造化マークアップ</h3>
  <div class="code-block">&lt;div itemscope itemtype="http://schema.org/Corporation"&gt;
  &lt;span itemprop="name"&gt;株式会社〇〇&lt;/span&gt;
&lt;/div&gt;</div>
  <p>→「これは会社名である」と検索エンジンが理解できる</p>
</div>
<div class="dc-section">
  <h2>メリット</h2>
  <div class="highlight hl-green">検索結果にリッチスニペット（評価の星・FAQ・パンくず等）が表示されやすくなり、クリック率（CTR）が向上します。</div>
</div>`
  },

  {
    id: 'crawling', category: 'seo',
    title: 'クローリング対策',
    shortDesc: '検索エンジンがサイトを正しく巡回できるようにするSEO対策',
    tags: ['クローリング','XMLサイトマップ','sitemap','パンくず','URL正規化','SEO'],
    content: `
<div class="dc-section">
  <h2>クローリングとは</h2>
  <p>Googleなどの検索エンジンのロボット（クローラー）がWebサイトを自動的に巡回し、情報を収集する作業のことです。クローリングが正しく行われないと検索結果に表示されません。</p>
</div>
<div class="dc-section">
  <h2>主な対策</h2>
  <div class="step-list">
    <div class="step-item">
      <div class="step-num">1</div>
      <div class="step-content"><strong>XMLサイトマップ（sitemap.xml）</strong><span>サイト内全ページのURLや更新頻度・優先度を検索エンジン向けに記載したXMLファイル。</span></div>
    </div>
    <div class="step-item">
      <div class="step-num">2</div>
      <div class="step-content"><strong>内部リンクの最適化</strong><span>サイト内のページ同士をリンクで繋ぎ、クローラーが全ページを発見できるようにする。</span></div>
    </div>
    <div class="step-item">
      <div class="step-num">3</div>
      <div class="step-content"><strong>パンくずリスト</strong><span>「ホーム ＞ カテゴリ ＞ 記事名」のような階層構造のナビゲーション。構造化マークアップと組み合わせると効果的。</span></div>
    </div>
    <div class="step-item">
      <div class="step-num">4</div>
      <div class="step-content"><strong>URLの正規化</strong><span>同じページのURLを1つに統一すること。カノニカルタグと組み合わせて使う。</span></div>
    </div>
  </div>
</div>
<div class="dc-section">
  <h2>XMLサイトマップの例</h2>
  <div class="code-block">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;
  &lt;url&gt;
    &lt;loc&gt;https://example.com/foo.html&lt;/loc&gt;
    &lt;lastmod&gt;2024-06-04&lt;/lastmod&gt;
    &lt;priority&gt;0.8&lt;/priority&gt;
  &lt;/url&gt;
&lt;/urlset&gt;</div>
</div>`
  },

  {
    id: 'backlink', category: 'seo',
    title: '被リンク',
    shortDesc: '他のWebサイトから自分のサイトへ貼られているリンク',
    tags: ['被リンク','バックリンク','外部リンク','SEO','評価'],
    content: `
<div class="dc-section">
  <h2>被リンクとは</h2>
  <p>他のWebサイトから自分のサイトへ貼られているリンクのことです。「他サイトから紹介されているリンク」とも言えます。</p>
  <div class="highlight hl-blue">被リンクの数・質はSEOの重要な評価指標のひとつです。良質なサイトからの被リンクが多いほど、検索順位の向上に繋がります。</div>
</div>
<div class="dc-section">
  <h2>リンクの種類</h2>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>種類</th><th>説明</th><th>SEHの影響</th></tr></thead>
      <tbody>
        <tr><td>被リンク</td><td>他サイト → 自分のサイト</td><td>◎ 大きくプラス</td></tr>
        <tr><td>内部リンク</td><td>自サイト内のページ同士</td><td>○ クローリングに有効</td></tr>
        <tr><td>外部リンク</td><td>自分のサイト → 他サイト</td><td>△ 直接的な影響は少ない</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="dc-section">
  <h2>良質な被リンクを得るには</h2>
  <ul>
    <li>価値の高いコンテンツ（ブログ・調査レポート・ツール）を作成する</li>
    <li>SNSでのシェアを促進する</li>
    <li>他サイトとのコラボレーション・取材依頼</li>
  </ul>
</div>`
  },

  {
    id: 'meo', category: 'seo',
    title: 'MEO（マップエンジン最適化）',
    shortDesc: 'Googleマップでお店を上位に表示させるための対策',
    tags: ['MEO','マップ','Googleマップ','地図','ローカル','上位表示'],
    content: `
<div class="dc-section">
  <h2>MEOとは</h2>
  <p>Map Engine Optimization の略。Googleマップの検索結果（「近くのカフェ」など）で、自店舗を上位に表示させるための対策です。</p>
</div>
<div class="dc-section">
  <h2>SEOとの違い</h2>
  <div class="comparison-grid">
    <div class="comparison-card" style="border-color:#2563eb">
      <h4>SEO</h4>
      <ul><li>Google検索結果での上位表示</li><li>全国・全世界を対象</li><li>コンテンツの質が重要</li></ul>
    </div>
    <div class="comparison-card" style="border-color:#059669">
      <h4>MEO</h4>
      <ul><li>Googleマップでの上位表示</li><li>地域密着型ビジネス向け</li><li>Googleビジネスプロフィールが重要</li></ul>
    </div>
  </div>
</div>
<div class="dc-section">
  <h2>改善のポイント</h2>
  <ul>
    <li>Googleビジネスプロフィールを最新状態に保つ</li>
    <li>レビューを集める（返信も行う）</li>
    <li>営業時間・住所・電話番号を正確に記載</li>
    <li>写真を定期的に更新する</li>
  </ul>
</div>`
  },

  {
    id: 'suggest-keyword', category: 'seo',
    title: 'サジェストキーワード',
    shortDesc: '検索窓に表示される自動補完の候補ワード',
    tags: ['サジェスト','キーワード','検索候補','オートコンプリート','SEO'],
    content: `
<div class="dc-section">
  <h2>サジェストキーワードとは</h2>
  <p>検索窓にキーワードを入力した際に、検索エンジンが「次に続く言葉はこれではありませんか？」と自動で表示してくれる候補（予測候補）のことです。</p>
  <div class="highlight hl-blue">例：「Web制作」と入力すると「Web制作 独学」「Web制作 勉強」「Web制作 会社」などが表示される</div>
</div>
<div class="dc-section">
  <h2>なぜSEOで重要か</h2>
  <ul>
    <li>ユーザーが実際に検索しているキーワードがわかる</li>
    <li>コンテンツのテーマ選定に活用できる</li>
    <li>ユーザーの検索意図を把握できる</li>
    <li>競合が少ないキーワードを発見できることがある</li>
  </ul>
</div>
<div class="dc-section">
  <h2>活用方法</h2>
  <p>記事タイトルや見出しにサジェストキーワードを盛り込むことで、そのキーワードで検索したユーザーにリーチしやすくなります。</p>
  <div class="highlight hl-yellow">検索エンジンが「次に続く言葉はこれではありませんか？」と自動で表示してくれる候補のため、ユーザーの生の需要を反映しています。</div>
</div>`
  },

  /* ─── SERVER ──────────────────────────────────────────── */
  {
    id: 'dns', category: 'server',
    title: 'DNS・DNSレコード',
    shortDesc: 'ドメイン名をIPアドレスに変換するシステムと設定',
    tags: ['DNS','DNSレコード','ドメイン','IPアドレス','ネームサーバー','Aレコード','MX','CNAME'],
    content: `
<div class="dc-section">
  <h2>DNSとは</h2>
  <p>Domain Name System の略。ドメイン名（example.com）をIPアドレス（192.0.2.1）に変換するシステムです。「インターネットの電話帳」と例えられます。</p>
  <div class="highlight hl-blue">DNS＝電話帳 ／ DNSレコード＝電話帳のデータ ／ サーバー＝実際のお店</div>
</div>
<div class="dc-section">
  <h2>仕組みの流れ</h2>
  <div class="diagram">
<span class="node">ユーザー</span>
  <span class="arrow">↓ example.com にアクセス</span>
<span class="node">DNS（住所を調べる）</span>
  <span class="arrow">↓ DNSレコード「example.com → 192.0.2.1」</span>
<span class="node">サーバー（192.0.2.1）</span>
  <span class="arrow">↓</span>
<span class="node" style="background:#065f46;border-color:#047857;color:#6ee7b7">Webサイト表示 ✓</span>
  </div>
</div>
<div class="dc-section">
  <h2>DNSレコードの種類</h2>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>レコード</th><th>役割</th><th>使用例</th></tr></thead>
      <tbody>
        <tr><td>Aレコード</td><td>ドメイン → サーバーIP</td><td>example.com → 192.0.2.1</td></tr>
        <tr><td>CNAMEレコード</td><td>ドメイン → 別のドメイン</td><td>www.example.com → example.com</td></tr>
        <tr><td>MXレコード</td><td>メールサーバーを指定</td><td>example.com → mail.google.com</td></tr>
        <tr><td>ネームサーバー</td><td>DNSレコードを管理する場所</td><td>ns1.xserver.jp</td></tr>
        <tr><td>SPF</td><td>IPアドレスで送信元メールを確認</td><td>なりすまし防止</td></tr>
        <tr><td>DKIM</td><td>電子署名で送信元メールを確認</td><td>なりすまし防止</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="dc-section">
  <h2>DNSレコード変更 vs ネームサーバー変更</h2>
  <div class="comparison-grid">
    <div class="comparison-card">
      <h4>DNSレコード変更</h4>
      <p style="font-size:13px">設定の<strong>中身</strong>を変更。ネームサーバー内のDNSレコードのみ変更するため、IPアドレスとの連携部分のみ変更。</p>
    </div>
    <div class="comparison-card">
      <h4>ネームサーバー変更</h4>
      <p style="font-size:13px">設定を管理している<strong>場所</strong>を変更。DNS管理場所ごと変更するため、IPアドレスとの連携も合わせて行う必要がある。</p>
    </div>
  </div>
</div>`
  },

  {
    id: 'domain', category: 'server',
    title: 'ドメイン・レジストラ・ネームサーバー',
    shortDesc: 'インターネット上の住所となるドメインの仕組みと管理',
    tags: ['ドメイン','レジストラ','ネームサーバー','お名前.com','Xサーバー','独自ドメイン'],
    content: `
<div class="dc-section">
  <h2>ドメインとは</h2>
  <p>インターネット上の「住所」のようなもの。<code>example.com</code> のような文字列で、対応するサーバーの場所を示します。</p>
</div>
<div class="dc-section">
  <h2>登場人物</h2>
  <div class="step-list">
    <div class="step-item">
      <div class="step-num">1</div>
      <div class="step-content"><strong>レジストラ（ドメイン販売会社）</strong><span>ドメインを取得・管理するためのサービス会社。「ドメインを買う窓口」。<br>代表例：お名前.com・ムームードメイン・さくらインターネット・Xサーバー</span></div>
    </div>
    <div class="step-item">
      <div class="step-num">2</div>
      <div class="step-content"><strong>ネームサーバー（DNS管理）</strong><span>ドメイン名をどのサーバーに接続するかを管理している場所。<br>例：<code>ns1.xserver.jp</code>、<code>ns2.xserver.jp</code></span></div>
    </div>
    <div class="step-item">
      <div class="step-num">3</div>
      <div class="step-content"><strong>DNSレコード（接続ルール）</strong><span>ネームサーバーの中の実際の接続設定。AレコードやMXレコードなど。</span></div>
    </div>
  </div>
</div>
<div class="dc-section">
  <h2>ドメイン失効の注意点</h2>
  <div class="highlight hl-yellow">
    <strong>⚠️ ドメインは1年で失効する</strong><br>
    失効してしまうと他社に買われてしまう可能性があります。どうしても解約したい場合でも1年間は継続（リダイレクト）することを推奨。海外で売り買いされると交渉で買い戻す必要が生じます。
  </div>
</div>`
  },

  {
    id: 'hosting', category: 'server',
    title: 'ホスティング',
    shortDesc: 'Webサイトのデータを保管・公開するためにサーバーを貸し出すサービス',
    tags: ['ホスティング','レンタルサーバー','Xサーバー','サーバー'],
    content: `
<div class="dc-section">
  <h2>ホスティングとは</h2>
  <p>Webサイトやメール・データベースなどのデータをインターネット上で公開・運用するために、事業者が保有するサーバーの容量（スペース）を貸し出すサービスです。</p>
  <div class="highlight hl-blue">一言で言うと「サーバーを貸すサービス」</div>
</div>
<div class="dc-section">
  <h2>サーバーに保存されるもの</h2>
  <div class="code-block">サーバー/
├── HTML（ページの骨格）
├── CSS（デザイン）
├── JavaScript（動き）
├── 画像・動画ファイル
├── WordPress本体
└── データベース（DB）</div>
</div>
<div class="dc-section">
  <h2>サーバーの役割・種類</h2>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>種類</th><th>役割</th></tr></thead>
      <tbody>
        <tr><td>Webサーバー</td><td>ブラウザからのリクエストに応じてWebページを返す</td></tr>
        <tr><td>メールサーバー</td><td>メールの送受信を担当（送信・受信で異なる）</td></tr>
        <tr><td>DNSサーバー</td><td>ドメインとIPアドレスを紐づける</td></tr>
        <tr><td>データベースサーバー</td><td>データの保存・取得を行う</td></tr>
        <tr><td>ファイルサーバー</td><td>ネット上でファイルを共有する</td></tr>
      </tbody>
    </table>
  </div>
  <div class="highlight hl-green">代表的なレンタルサーバー：<strong>Xサーバー</strong>（日本でのシェアNo.1クラス）</div>
</div>`
  },

  {
    id: 'ssl', category: 'server',
    title: 'SSL証明書',
    shortDesc: 'HTTPS通信を実現するサーバー証明書（1年更新）',
    tags: ['SSL','HTTPS','セキュリティ','証明書'],
    content: `
<div class="dc-section">
  <h2>SSL証明書とは</h2>
  <p>Webサイトと訪問者の間の通信を暗号化するための証明書です。SSLが有効なサイトはURLが <code>https://</code> になります。</p>
</div>
<div class="dc-section">
  <h2>なぜ必要か</h2>
  <ul>
    <li>通信内容の盗聴・改ざんを防ぐ</li>
    <li>Googleがhttpsサイトを評価する（SEO効果）</li>
    <li>ブラウザに「保護されていない通信」警告が出なくなる</li>
    <li>フォーム送信・ログイン等の安全性を確保</li>
  </ul>
</div>
<div class="dc-section">
  <h2>有効期限について</h2>
  <div class="highlight hl-yellow">
    <strong>⚠️ SSL証明書は1年で期限切れになります</strong><br>
    期限が切れると「サイトが見れなくなる」だけで、取り直せば復旧できます。自動更新設定を必ず確認しておきましょう。
  </div>
</div>`
  },

  {
    id: 'server-types', category: 'server',
    title: 'サーバーの種類',
    shortDesc: '共用・専用・VPS・クラウドサーバーの特徴比較',
    tags: ['サーバー','共用','専用','VPS','クラウド','AWS','インフラ'],
    content: `
<div class="dc-section">
  <h2>4種類のサーバー</h2>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>種類</th><th>特徴</th><th>コスト</th><th>例え</th></tr></thead>
      <tbody>
        <tr><td>共用サーバー（物理）</td><td>1台をみんなで使う。他サイトの影響を受ける場合がある</td><td>低</td><td>ビルの一室</td></tr>
        <tr><td>専用サーバー（物理）</td><td>1台を丸々使う。高性能</td><td>高</td><td>建売住宅</td></tr>
        <tr><td>VPS（仮想）</td><td>仮想的に分割したサーバー。専用に近い性能</td><td>中</td><td>オーダーメイド</td></tr>
        <tr><td>パブリッククラウド（AWS等）</td><td>必要な分だけ借りる。柔軟・スケーラブル</td><td>従量課金</td><td>コインロッカー</td></tr>
      </tbody>
    </table>
  </div>
  <div class="highlight hl-blue">業務では「どこのサーバーの何のプランを使っているか」まで把握できれば十分です。</div>
</div>`
  },

  {
    id: 'on-premise', category: 'server',
    title: 'オンプレミス vs クラウド',
    shortDesc: 'ITインフラの自社管理と外部サービス利用の違い',
    tags: ['オンプレミス','クラウド','AWS','インフラ','サーバー'],
    content: `
<div class="dc-section">
  <h2>2つの運用形態</h2>
  <div class="comparison-grid">
    <div class="comparison-card" style="border-color:#dc2626">
      <h4>🏢 オンプレミス（自社運用）</h4>
      <ul>
        <li>サーバー・ネットワーク機器を自社施設内に設置</li>
        <li>自分で買う → 全部自分で用意</li>
        <li>管理・故障対応も自社で行う</li>
        <li>初期費用が高い</li>
        <li>セキュリティ・カスタマイズ性が高い</li>
      </ul>
    </div>
    <div class="comparison-card" style="border-color:#2563eb">
      <h4>☁️ クラウド（外部サービス利用）</h4>
      <ul>
        <li>必要な分だけ借りる</li>
        <li>管理はAWS・Azure・GCPなどが担当</li>
        <li>月額課金（従量制）</li>
        <li>初期費用が低い・スケールアップが容易</li>
        <li>代表例：AWS（Amazon Web Services）</li>
      </ul>
    </div>
  </div>
</div>
<div class="dc-section">
  <h2>どちらを選ぶか</h2>
  <div class="highlight hl-yellow">近年はほとんどのWeb制作案件でクラウド（AWSなど）が使われています。スタートアップや中小企業は特にクラウドが主流です。</div>
</div>`
  },

  {
    id: 'middleware', category: 'server',
    title: 'ミドルウェア',
    shortDesc: 'サーバーとアプリケーションの間で動くソフトウェア',
    tags: ['ミドルウェア','PHP','MySQL','Apache','WordPress'],
    content: `
<div class="dc-section">
  <h2>ミドルウェアとは</h2>
  <p>サーバー（ハードウェア・OS）とアプリケーション（WordPressなど）の間で動くソフトウェアの総称です。</p>
</div>
<div class="dc-section">
  <h2>代表的なミドルウェア</h2>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>名前</th><th>役割</th></tr></thead>
      <tbody>
        <tr><td>PHP</td><td>サーバーサイドのプログラミング言語。WordPressはPHPで動いている</td></tr>
        <tr><td>MySQL</td><td>データベース管理システム。記事・ユーザー情報などを保存</td></tr>
        <tr><td>Apache / Nginx</td><td>Webサーバーソフト。ブラウザからのリクエストを処理する</td></tr>
      </tbody>
    </table>
  </div>
  <div class="code-block">【WordPressの構成イメージ】
ブラウザ → Apache（Webサーバー） → PHP（プログラム処理） → MySQL（データ取得） → HTMLを返す</div>
</div>`
  },

  {
    id: 'basic-auth', category: 'server',
    title: 'ベーシック認証（Basic認証）',
    shortDesc: 'HTTPプロトコルに備わるIDとパスワードによるアクセス制限',
    tags: ['ベーシック認証','Basic認証','HTTP','認証','アクセス制限'],
    content: `
<div class="dc-section">
  <h2>ベーシック認証とは</h2>
  <p>通信規格「HTTP」に備えられている認証方法の一種です。Webサイトにアクセスできる人を制限したい場合に設定します。</p>
</div>
<div class="dc-section">
  <h2>動作の流れ</h2>
  <div class="step-list">
    <div class="step-item"><div class="step-num">1</div><div class="step-content"><strong>ベーシック認証を設定したページにアクセス</strong><span>ブラウザにポップアップが表示される</span></div></div>
    <div class="step-item"><div class="step-num">2</div><div class="step-content"><strong>IDとパスワードを入力</strong><span>事前に設定したIDとパスワードが必要</span></div></div>
    <div class="step-item"><div class="step-num">3</div><div class="step-content"><strong>認証成功でページを閲覧可能</strong><span>特定の相手だけにページやファイルの閲覧を許可できる</span></div></div>
  </div>
</div>
<div class="dc-section">
  <h2>主な用途</h2>
  <ul>
    <li>制作中のWebサイトを公開前に確認する（公開しながら限定公開）</li>
    <li>社内向けページのアクセス制限</li>
    <li>テスト環境の保護</li>
  </ul>
</div>`
  },

  {
    id: 'subdomain', category: 'server',
    title: 'サブドメイン vs サブディレクトリ',
    shortDesc: 'URLの構造による独立性・SEO評価の違い',
    tags: ['サブドメイン','サブディレクトリ','URL','SEO','ドメイン'],
    content: `
<div class="dc-section">
  <h2>2つのURL構造</h2>
  <div class="comparison-grid">
    <div class="comparison-card">
      <h4>サブドメイン</h4>
      <div class="code-block" style="font-size:12px">sub.example.com</div>
      <p style="font-size:13px">ドメインの前に文字列を追加。独立したサイトとして機能する。</p>
    </div>
    <div class="comparison-card">
      <h4>サブディレクトリ</h4>
      <div class="code-block" style="font-size:12px">example.com/sub/</div>
      <p style="font-size:13px">ドメインの後に文字列を追加。同一サイトの一部として機能する。</p>
    </div>
  </div>
</div>
<div class="dc-section">
  <h2>詳細比較</h2>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>特徴</th><th>サブドメイン</th><th>サブディレクトリ</th></tr></thead>
      <tbody>
        <tr><td>独立性</td><td>高い（別サイトとして機能）</td><td>低い（同一サイトの一部）</td></tr>
        <tr><td>SEO評価</td><td>基本的に独立（引き継ぎなし）</td><td>メインドメインの評価を引き継ぐ</td></tr>
        <tr><td>適した内容</td><td>異なるサービス・言語別サイト</td><td>関連コンテンツ・ブログ</td></tr>
        <tr><td>管理</td><td>分けて管理しやすい</td><td>一括管理しやすい</td></tr>
      </tbody>
    </table>
  </div>
</div>`
  },

  /* ─── DESIGN ──────────────────────────────────────────── */
  {
    id: 'mockup', category: 'design',
    title: 'モックアップ・プロトタイプ・デザインカンプ',
    shortDesc: '制作物の完成度を段階別に表す3つの用語',
    tags: ['モックアップ','プロトタイプ','デザインカンプ','Figma','デザイン'],
    content: `
<div class="dc-section">
  <h2>3つの用語の違い</h2>
  <div class="step-list">
    <div class="step-item">
      <div class="step-num">1</div>
      <div class="step-content"><strong>モックアップ</strong><span>完成後の見た目に近いデザインを、実際の画像のように作り上げたもの。操作はできないが、見た目の確認に使う。</span></div>
    </div>
    <div class="step-item">
      <div class="step-num">2</div>
      <div class="step-content"><strong>プロトタイプ</strong><span>実際に操作できるモデル。ボタンクリックやページ遷移などの動作確認に使う。</span></div>
    </div>
    <div class="step-item">
      <div class="step-num">3</div>
      <div class="step-content"><strong>デザインカンプ</strong><span>ほぼ完成に近いデザイン画。コーディング前の最終デザイン確認に使う（「完成系」を指す）。</span></div>
    </div>
  </div>
</div>
<div class="dc-section">
  <h2>制作フロー</h2>
  <div class="highlight hl-purple">
    <strong>① ワイヤーフレーム</strong>（設計） → <strong>② デザインカンプ</strong>（Figma/Photoshop） → <strong>③ デザインマークアップ</strong>（HTML/CSS化） → <strong>④ CMS組み込み</strong>（システム実装）
  </div>
</div>`
  },

  {
    id: 'vi-design', category: 'design',
    title: 'VI設計（ビジュアル・アイデンティティ）',
    shortDesc: 'ロゴ・色・フォントなどでブランドの「らしさ」を統一する仕組み',
    tags: ['VI','ビジュアルアイデンティティ','ブランド','デザイン','ロゴ','フォント'],
    content: `
<div class="dc-section">
  <h2>VI設計とは</h2>
  <p>企業やブランドの理念・価値・コンセプトを、ロゴ・色・フォント・写真などの視覚的要素で統一し、ブランドの「らしさ」を一貫して伝える仕組みです。</p>
</div>
<div class="dc-section">
  <h2>VIの構成要素</h2>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>要素</th><th>内容</th></tr></thead>
      <tbody>
        <tr><td>ロゴ</td><td>ブランドのシンボルマーク・ロゴタイプ</td></tr>
        <tr><td>カラーパレット</td><td>ブランドカラー（メイン・サブ・アクセント）</td></tr>
        <tr><td>フォント</td><td>見出し・本文に使用するフォントの統一</td></tr>
        <tr><td>写真・イラスト</td><td>使用する画像のトーン・スタイルの統一</td></tr>
        <tr><td>レイアウトルール</td><td>余白・グリッドの使い方の統一</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="dc-section">
  <h2>なぜ重要か</h2>
  <div class="highlight hl-purple">VIが統一されていると、どのメディア（Web・印刷・SNS）でもブランドの「顔」が一致し、認知度と信頼感が高まります。</div>
</div>`
  },

  {
    id: 'layout', category: 'design',
    title: 'レイアウト基本（グリッド・Z型・F型）',
    shortDesc: 'Webデザインの配置ルールと視線の動きを理解する',
    tags: ['レイアウト','グリッド','Z型','F型','視線','デザイン','12カラム'],
    content: `
<div class="dc-section">
  <h2>① グリッドレイアウト</h2>
  <p>画面を見えない線で区切る設計ルール。Webサイトでは <strong>12カラムグリッド</strong> がよく使われます。</p>
  <div class="code-block">| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |</div>
  <ul><li>レイアウトが整う</li><li>デザインが作りやすい</li><li>レスポンシブ対応しやすい</li></ul>
</div>
<div class="dc-section">
  <h2>② Z型レイアウト</h2>
  <p>シンプルなページを見るときの視線の動き。LPなどでよく使われる配置です。</p>
  <div class="code-block">ロゴ              ナビゲーション
→ → → → → → → → → → → → →↘
← ← ← ← ← ← ← ← ← ← ← ←
↘
  メインコピー → 説明文 → CTAボタン</div>
</div>
<div class="dc-section">
  <h2>③ F型レイアウト</h2>
  <p>人が文章を読むときの視線の動き。上をしっかり読み、下に行くほど流し読みになります。</p>
  <div class="code-block">→ → → → → → （しっかり読む）
↓
→ → → → （斜め読み）
↓
→ → （さらに流し読み）</div>
  <div class="highlight hl-blue"><strong>重要情報は必ず上に配置する</strong> のがポイントです。</div>
</div>
<div class="dc-section">
  <h2>コンテンツの優先順位</h2>
  <ol><li>キャッチコピー</li><li>サービス説明</li><li>事例</li><li>問い合わせ</li></ol>
</div>`
  },

  {
    id: 'whitespace', category: 'design',
    title: '余白・視覚階層',
    shortDesc: '読みやすさと情報の優先度を伝えるデザイン原則',
    tags: ['余白','ホワイトスペース','視覚階層','デザイン','UX'],
    content: `
<div class="dc-section">
  <h2>余白（ホワイトスペース）</h2>
  <p>コンテンツとコンテンツの間の空白スペースのことです。「何もない」ように見えますが、デザインの重要な要素です。</p>
  <div class="highlight hl-purple">
    余白の効果：<br>
    ✅ 読みやすくなる ／ ✅ 情報が整理される ／ ✅ 高級感が出る
  </div>
</div>
<div class="dc-section">
  <h2>視覚階層（ビジュアルヒエラルキー）</h2>
  <p>見てほしい順に目立たせる設計のこと。人は<strong>大きいもの・目立つ色・上にあるもの</strong>を先に見る性質があります。</p>
  <div class="code-block">大タイトル（大・太・目立つ色）
  ↓
中タイトル（中・やや太）
  ↓
本文（小・通常）
  ↓
注釈（最小・グレー）</div>
</div>
<div class="dc-section">
  <h2>視覚階層のメリット</h2>
  <ul>
    <li><strong>情報を素早く理解できる</strong>：「ここが一番大事」と自然に読み取れる</li>
    <li><strong>行動を誘導できる</strong>：CTAボタンなど、最も注目してほしい要素に目線を導ける</li>
    <li><strong>ブランドの信頼感を高める</strong>：「きちんと考えられている」という安心感を生む</li>
    <li><strong>離脱を防ぐ</strong>：情報を見つけやすくすることで滞在時間が伸びる</li>
  </ul>
</div>`
  },

  {
    id: 'accordion', category: 'design',
    title: 'アコーディオン',
    shortDesc: 'クリックで開閉するUIコンポーネント',
    tags: ['アコーディオン','UI','FAQ','コンポーネント','開閉'],
    content: `
<div class="dc-section">
  <h2>アコーディオンとは</h2>
  <p>クリック（またはタップ）することで、コンテンツが展開・収納するUIコンポーネントです。楽器のアコーディオンが伸び縮みするようすが名前の由来です。</p>
</div>
<div class="dc-section">
  <h2>主な用途</h2>
  <ul>
    <li><strong>FAQ（よくある質問）</strong>：質問をクリックすると答えが表示される</li>
    <li><strong>メニュー展開</strong>：ナビゲーションのサブメニュー</li>
    <li><strong>詳細情報の折りたたみ</strong>：「詳しく見る」で展開するセクション</li>
  </ul>
  <div class="highlight hl-blue">情報量が多いページで、初期表示をすっきりさせながら必要な情報にアクセスできる設計に有効です。</div>
</div>`
  },

  /* ─── TOOL ────────────────────────────────────────────── */
  {
    id: 'plugin', category: 'tool',
    title: 'プラグイン（WordPress）',
    shortDesc: 'CMS等に追加して機能を拡張するための小さなプログラム',
    tags: ['プラグイン','WordPress','ACF PRO','WBフォームス','コンタクトフォームセブン','機能拡張'],
    content: `
<div class="dc-section">
  <h2>プラグインとは</h2>
  <p>WebブラウザやCMS（WordPressなど）といった既存のソフトウェアに、後から追加して機能を拡張するための小さなプログラムです。</p>
</div>
<div class="dc-section">
  <h2>代表的なWordPressプラグイン</h2>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>プラグイン名</th><th>種類</th><th>特徴</th></tr></thead>
      <tbody>
        <tr><td>ACF PRO</td><td>カスタムフィールド</td><td>投稿に独自の入力欄を追加できる（有料）</td></tr>
        <tr><td>WBフォームス</td><td>フォーム（有料）</td><td>フォームをWordPressで管理できる。送信内容をDB保存できる</td></tr>
        <tr><td>Contact Form 7</td><td>フォーム（無料）</td><td>日本で最も使われているフォームプラグイン。ただし確認画面が標準では使えない</td></tr>
        <tr><td>Yoast SEO</td><td>SEO</td><td>メタタグ・OGP・XMLサイトマップを管理</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="dc-section">
  <h2>注意点</h2>
  <div class="highlight hl-yellow">プラグインの入れすぎはサイトの表示速度（LCP）悪化につながります。必要最低限に絞ることが重要です。</div>
</div>`
  },

  {
    id: 'crm-hubspot', category: 'tool',
    title: 'CRM・HubSpot',
    shortDesc: '顧客情報の収集・管理とマーケティング連携のツール',
    tags: ['CRM','HubSpot','顧客管理','インバウンド','マーケティング','セールス'],
    content: `
<div class="dc-section">
  <h2>CRMとは</h2>
  <p>Customer Relationship Management（顧客関係管理）の略。顧客情報と営業状況を会社全体で管理するシステムです。</p>
</div>
<div class="dc-section">
  <h2>HubSpotとは</h2>
  <p>インバウンドマーケティングのプラットフォーム。CRMツールとして設計されており、以下の機能を提供します：</p>
  <ul>
    <li>顧客情報の収集・管理</li>
    <li>マーケティング自動化（メール配信等）</li>
    <li>セールス管理（パイプライン・商談管理）</li>
    <li>カスタマーサービス対応</li>
    <li>Webサイトのアクセス解析</li>
  </ul>
</div>
<div class="dc-section">
  <h2>インバウンドマーケティングとは</h2>
  <div class="highlight hl-blue">顧客に対して価値のあるコンテンツ（ブログ・ホワイトペーパー・動画）を提供し、顧客から「見つけてもらう」マーケティング手法。</div>
  <p>コンテンツを検索上位に表示させたり、SNSで拡散してもらうことで顧客に見つけてもらうことを目的とします。</p>
</div>`
  },

  {
    id: 'mcp-tech', category: 'tool',
    title: 'MCP',
    shortDesc: 'AIが外部ツールとつながるための共通接続方式',
    tags: ['MCP','AI','ツール接続','Claude','外部連携'],
    content: `
<div class="dc-section">
  <h2>MCPとは</h2>
  <p>Model Context Protocol の略。AIが外部ツールとつながるための共通ルール（接続方式）です。</p>
  <div class="highlight hl-blue">MCPを使うと、AIが「ブラウザを操作する」「ファイルを読み書きする」「APIを呼び出す」などの外部操作を標準的な方法で行えるようになります。</div>
</div>
<div class="dc-section">
  <h2>具体的なイメージ</h2>
  <div class="code-block">AI（Claude等）
  ↕ MCP（共通ルール）
外部ツール（Google Drive・Figma・GitHub・データベース等）</div>
  <p>異なるツールに対して、MCPという共通の接続方式を使うことで、AIがさまざまなツールを一貫した方法で利用できます。</p>
</div>`
  },

  {
    id: 'headless-cms', category: 'tool',
    title: 'ヘッドレスCMS',
    shortDesc: 'コンテンツ管理と表示を分離したCMSの仕組み',
    tags: ['ヘッドレスCMS','CMS','WordPress','フロントエンド','バックエンド'],
    content: `
<div class="dc-section">
  <h2>ヘッドレスCMSとは</h2>
  <p>コンテンツ管理機能（CMS）とWebサイトの<strong>表示部分を分離</strong>したCMSのことです。</p>
</div>
<div class="dc-section">
  <h2>従来のCMSとの違い</h2>
  <div class="comparison-grid">
    <div class="comparison-card">
      <h4>従来のCMS（例：WordPress）</h4>
      <ul><li>管理画面と表示がひとつにまとまっている</li><li>テーマで見た目を変える</li><li>セットアップが簡単</li></ul>
    </div>
    <div class="comparison-card">
      <h4>ヘッドレスCMS（例：Contentful・microCMS）</h4>
      <ul><li>コンテンツ管理（バックエンド）と表示（フロントエンド）が分離</li><li>APIでコンテンツを取得し自由に表示</li><li>高い自由度・パフォーマンス</li></ul>
    </div>
  </div>
</div>
<div class="dc-section">
  <h2>メリット・デメリット</h2>
  <div class="highlight hl-green">メリット：フロントエンドの技術選択が自由（React・Vue等）。高速・高セキュリティ。</div>
  <div class="highlight hl-yellow">デメリット：初期構築のコストが高い。エンジニアが必要。</div>
</div>`
  },

  {
    id: 'markdown', category: 'tool',
    title: 'マークダウン（Markdown記法）',
    shortDesc: '記号を使ってテキストに構造を与えるシンプルな記述方法',
    tags: ['マークダウン','Markdown','記法','テキスト','README','md'],
    content: `
<div class="dc-section">
  <h2>マークダウンとは</h2>
  <p>テキストを構造的に記述する「マークアップ言語」の一種。特定の記号を使って、見出し・リスト・装飾などを表現できます。AIへの指示書やシステム設計書によく使われます。</p>
</div>
<div class="dc-section">
  <h2>基本的な記法</h2>
  <div class="code-block"># 見出し1
## 見出し2
### 見出し3

**太字** / *斜体*

- リスト項目
- リスト項目

1. 番号付きリスト
2. 番号付きリスト

> 引用文

\`コード\`</div>
</div>
<div class="dc-section">
  <h2>AI開発での主なファイル名</h2>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>ファイル名</th><th>用途</th></tr></thead>
      <tbody>
        <tr><td>README.md</td><td>プロジェクト説明</td></tr>
        <tr><td>requirements.md</td><td>要件定義</td></tr>
        <tr><td>architecture.md</td><td>システム設計</td></tr>
        <tr><td>sitemap.md</td><td>サイト構造</td></tr>
        <tr><td>prompt.md</td><td>AIへの指示</td></tr>
      </tbody>
    </table>
  </div>
</div>`
  },

  {
    id: 'php', category: 'tool',
    title: 'PHPファイル',
    shortDesc: 'Webページを動的に生成するサーバーサイドのプログラムファイル',
    tags: ['PHP','.php','サーバーサイド','プログラミング','WordPress'],
    content: `
<div class="dc-section">
  <h2>PHPとは</h2>
  <p>Webページを作るためのサーバーサイドのプログラミング言語。拡張子は <code>.php</code>。WordPressはPHPで作られています。</p>
</div>
<div class="dc-section">
  <h2>サーバー側で動く</h2>
  <div class="diagram">
<span class="node">ブラウザ</span> → <span class="node">Webサーバー</span> → <span class="node">PHP処理</span> → <span class="node">MySQL</span>
                                    ↓
                              <span class="node" style="background:#065f46;color:#6ee7b7">HTMLを返す → ブラウザ表示</span>
  </div>
  <p>HTMLはブラウザ（クライアント側）で動くのに対し、PHPはサーバー側で処理されてからHTMLとしてブラウザに返されます。</p>
</div>
<div class="dc-section">
  <h2>WordPressとPHP</h2>
  <div class="highlight hl-blue">WordPressはPHP + MySQL（データベース）で動いています。テーマやプラグインもPHPで書かれています。</div>
</div>`
  },

  /* ─── BIZ ─────────────────────────────────────────────── */
  {
    id: 'roles', category: 'biz',
    title: 'チームの役割（PM・Dir・AD・Des・IS）',
    shortDesc: 'プロジェクトにおける各ポジションの担当領域',
    tags: ['PM','Dir','AD','Des','IS','役割','ディレクター','デザイナー'],
    content: `
<div class="dc-section">
  <h2>各役割の担当領域</h2>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>役職</th><th>フルネーム</th><th>主な業務</th></tr></thead>
      <tbody>
        <tr><td>PM</td><td>プロジェクトマネージャー</td><td>お金回りの交渉・人材アサイン・スケジュール管理</td></tr>
        <tr><td>Dir</td><td>ディレクター</td><td>細々としたコミュニケーション・WF作成・要件定義・クライアントとの情報設計確認</td></tr>
        <tr><td>AD</td><td>アートディレクター</td><td>ビジュアル・デザイン全体を監修。クライアントと直接話す</td></tr>
        <tr><td>Des</td><td>デザイナー</td><td>指示をうけて手を動かす人。クライアント折衝なし</td></tr>
        <tr><td>IS</td><td>インサイドセールス</td><td>内勤の営業担当。顧客への提案・商談</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="dc-section">
  <h2>PM vs Dir の違い</h2>
  <div class="comparison-grid">
    <div class="comparison-card" style="border-color:#2563eb">
      <h4>PM（プロジェクトマネージャー）</h4>
      <ul><li>お金回りの交渉</li><li>人材アサイン</li><li>プロジェクト全体の管理</li></ul>
    </div>
    <div class="comparison-card" style="border-color:#7c3aed">
      <h4>Dir（ディレクター）</h4>
      <ul><li>細々としたコミュニケーション</li><li>WF（ワイヤーフレーム）作成</li><li>現場レベルの進行管理</li></ul>
    </div>
  </div>
</div>`
  },

  {
    id: 'rfp', category: 'biz',
    title: 'RFP（提案依頼書）',
    shortDesc: 'システム開発などを発注する際に要件・予算・目的を提示する文書',
    tags: ['RFP','提案依頼書','発注','受注','ベンダー'],
    content: `
<div class="dc-section">
  <h2>RFPとは</h2>
  <p>Request for Proposal（提案依頼書）の略。システム開発や業務委託などを発注する際に、発注側が受注側（ベンダー）に提示する文書です。</p>
</div>
<div class="dc-section">
  <h2>RFPに記載する内容</h2>
  <ul>
    <li><strong>システム要件</strong>：何を作るか・どんな機能が必要か</li>
    <li><strong>予算</strong>：発注できる金額の目安</li>
    <li><strong>納期</strong>：いつまでに完成が必要か</li>
    <li><strong>背景・目的</strong>：なぜこのシステムが必要か</li>
    <li><strong>評価基準</strong>：どのように提案を評価するか</li>
  </ul>
</div>
<div class="dc-section">
  <h2>RFPの流れ</h2>
  <div class="step-list">
    <div class="step-item"><div class="step-num">1</div><div class="step-content"><strong>発注側がRFPを作成</strong><span>要件・予算・目的を整理</span></div></div>
    <div class="step-item"><div class="step-num">2</div><div class="step-content"><strong>複数のベンダーへ送付</strong><span>提案・見積もりを依頼</span></div></div>
    <div class="step-item"><div class="step-num">3</div><div class="step-content"><strong>ベンダーが提案書を提出</strong><span>提案内容・金額・スケジュールを提示</span></div></div>
    <div class="step-item"><div class="step-num">4</div><div class="step-content"><strong>発注先を決定・契約</strong><span>最も条件の良いベンダーへ発注</span></div></div>
  </div>
</div>`
  },

  {
    id: 'ipo', category: 'biz',
    title: 'IPO（株式公開）',
    shortDesc: '企業が初めて株式を一般投資家に売り出し証券取引所に上場すること',
    tags: ['IPO','株式','上場','証券取引所','投資'],
    content: `
<div class="dc-section">
  <h2>IPOとは</h2>
  <p>Initial Public Offering の略。企業が初めて株式を一般の投資家に売り出し、証券取引所に上場することです。</p>
</div>
<div class="dc-section">
  <h2>IPOのメリット</h2>
  <ul>
    <li><strong>資金調達</strong>：株式を売ることで大規模な資金を調達できる</li>
    <li><strong>知名度向上</strong>：上場企業として社会的信用が増す</li>
    <li><strong>優秀な人材の確保</strong>：ストックオプション等で魅力的な待遇を提示できる</li>
  </ul>
</div>
<div class="dc-section">
  <h2>Web制作との関係</h2>
  <div class="highlight hl-blue">IPOを目指す企業はコーポレートサイトの品質・情報開示に特に力を入れます。IR（投資家向け情報）ページの制作依頼が発生することがあります。</div>
</div>`
  },

  {
    id: 'nda', category: 'biz',
    title: 'NDA（秘密保持契約）',
    shortDesc: '機密情報を第三者に開示しないことを約束する契約',
    tags: ['NDA','秘密保持','契約','機密情報'],
    content: `
<div class="dc-section">
  <h2>NDAとは</h2>
  <p>Non-Disclosure Agreement の略。秘密保持契約ともいいます。業務上知り得た機密情報を第三者に開示・漏洩しないことを約束する契約です。</p>
</div>
<div class="dc-section">
  <h2>締結するタイミング</h2>
  <ul>
    <li>プロジェクト開始前・提案段階</li>
    <li>クライアントの内部情報を受け取る前</li>
    <li>新規取引先との取引開始時</li>
  </ul>
</div>
<div class="dc-section">
  <h2>NDAの対象となる情報</h2>
  <ul>
    <li>事業計画・戦略</li>
    <li>顧客情報・取引先情報</li>
    <li>未公開の製品・サービス情報</li>
    <li>財務情報</li>
    <li>技術情報・ソースコード</li>
  </ul>
  <div class="highlight hl-yellow">NDAに違反した場合は損害賠償の対象になる場合があります。受け取った情報の取り扱いには注意が必要です。</div>
</div>`
  },

  {
    id: 'pl-cf', category: 'biz',
    title: 'PL・CF（財務指標）',
    shortDesc: '売上と利益を管理するための2つの財務指標',
    tags: ['PL','CF','キャッシュフロー','売上','利益','財務'],
    content: `
<div class="dc-section">
  <h2>2つの財務指標</h2>
  <div class="comparison-grid">
    <div class="comparison-card" style="border-color:#2563eb">
      <h4>PL（損益計算書）</h4>
      <ul><li>「受注した月」基準</li><li>会社の利益と支出のバランスを表す</li><li>売上が立った時の金額を記録</li><li>前払いでいただいていても計上</li></ul>
    </div>
    <div class="comparison-card" style="border-color:#059669">
      <h4>CF（キャッシュフロー）</h4>
      <ul><li>「請求した月」基準</li><li>実際のお金の流れに近い</li><li>請求月に加算される（入金ではない）</li></ul>
    </div>
  </div>
</div>
<div class="dc-section">
  <h2>売上・利益の構造</h2>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>用語</th><th>内容</th></tr></thead>
      <tbody>
        <tr><td>売上</td><td>受注・納品した金額の合計</td></tr>
        <tr><td>外注費</td><td>納品した月のパートナー費用</td></tr>
        <tr><td>粗利</td><td>売上 − 外注費 ＝ 粗利（売上が高くても外注費が高ければ意味がない）</td></tr>
      </tbody>
    </table>
  </div>
  <div class="highlight hl-yellow">売上が立っていても外注費が高ければ利益は出ません。粗利を意識することが重要です。</div>
</div>`
  },

  {
    id: 'benchmark', category: 'biz',
    title: 'ベンチマーク',
    shortDesc: '自社の性能や品質を評価するための比較基準・指標',
    tags: ['ベンチマーク','比較','評価','指標','KPI'],
    content: `
<div class="dc-section">
  <h2>ベンチマークとは</h2>
  <p>自社の事業・製品・ITシステムなどの性能や品質を評価するための「比較基準・指標」のことです。他社や業界標準と比較することで、自社の現在地を把握できます。</p>
</div>
<div class="dc-section">
  <h2>Web制作での活用</h2>
  <ul>
    <li><strong>競合サイト調査</strong>：競合他社のWebサイトのデザイン・機能・SEO評価を比較する</li>
    <li><strong>パフォーマンス計測</strong>：Google PageSpeed InsightsでCWVスコアを比較</li>
    <li><strong>コンテンツ品質</strong>：検索上位サイトと自社コンテンツを比較分析</li>
  </ul>
  <div class="highlight hl-blue">ベンチマークを持つことで、改善の優先順位が明確になります。</div>
</div>`
  },

  {
    id: 'inbound', category: 'biz',
    title: 'インバウンドマーケティング',
    shortDesc: 'コンテンツを提供して顧客に「見つけてもらう」マーケティング手法',
    tags: ['インバウンド','マーケティング','コンテンツ','ブログ','SEO','HubSpot'],
    content: `
<div class="dc-section">
  <h2>インバウンドマーケティングとは</h2>
  <p>顧客に対して価値のあるコンテンツを提供し、サービスや商品への興味・信頼感を醸成するマーケティング手法です。顧客から「見つけてもらう」ことを目的とします。</p>
</div>
<div class="dc-section">
  <h2>アウトバウンドとの違い</h2>
  <div class="comparison-grid">
    <div class="comparison-card">
      <h4>アウトバウンド（従来型）</h4>
      <ul><li>テレアポ・飛び込み営業</li><li>広告・DM</li><li>企業から顧客へ「押し出す」</li></ul>
    </div>
    <div class="comparison-card" style="border-color:#2563eb">
      <h4>インバウンド（現代型）</h4>
      <ul><li>ブログ・ホワイトペーパー・動画</li><li>SEO・SNS活用</li><li>顧客が自ら「見つける」</li></ul>
    </div>
  </div>
</div>
<div class="dc-section">
  <h2>コンテンツの種類</h2>
  <ul>
    <li>ブログ記事・コラム</li>
    <li>ホワイトペーパー（詳細な資料）</li>
    <li>動画・ウェビナー</li>
    <li>メールマガジン</li>
    <li>SNS投稿</li>
  </ul>
  <div class="highlight hl-blue">これらを検索上位に表示させたり、SNSで拡散してもらうことで、顧客に「見つけてもらう」ことが目的です。</div>
</div>`
  },

  {
    id: 'wbs', category: 'biz',
    title: 'WBS・ガントチャート',
    shortDesc: 'プロジェクトの作業を分解・可視化する管理ツールの違い',
    tags: ['WBS','ガントチャート','プロジェクト管理','スケジュール','タスク'],
    content: `
<div class="dc-section">
  <h2>3つの管理ツール</h2>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>ツール</th><th>目的</th><th>形式</th></tr></thead>
      <tbody>
        <tr><td>WBS</td><td>プロジェクト全体を細かな作業に分解する</td><td>ツリー構造・リスト形式</td></tr>
        <tr><td>ガントチャート</td><td>タスクのスケジュール・担当・進捗を管理</td><td>横棒グラフ形式</td></tr>
        <tr><td>概算スケジュール</td><td>プロジェクト全体の大まかな期間を把握</td><td>マイルストーン形式</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="dc-section">
  <h2>WBSとは</h2>
  <p>Work Breakdown Structure の略。プロジェクトの構成図で、全体を細かな作業に分解した構成図です。「何をやるか」の全体像を把握するために使います。</p>
</div>
<div class="dc-section">
  <h2>ガントチャートとは</h2>
  <p>横軸に時間、縦軸にタスクを並べた棒グラフ形式のスケジュール管理ツール。「いつ・誰が・何をするか」を一覧で確認できます。</p>
  <div class="highlight hl-blue">WBSで「何をやるか」を整理してから、ガントチャートで「いつやるか」を計画するのが一般的な流れです。</div>
</div>`
  },

  /* ─── STRUCTURE ───────────────────────────────────────── */
  {
    id: 'sitemap', category: 'structure',
    title: 'サイトマップ（3種類）',
    shortDesc: 'Webサイトの構造を表す3つの異なるサイトマップ',
    tags: ['サイトマップ','XMLサイトマップ','sitemap.xml','HTMLサイトマップ','構成図'],
    content: `
<div class="dc-section">
  <h2>サイトマップは3種類ある</h2>
  <div class="step-list">
    <div class="step-item">
      <div class="step-num">1</div>
      <div class="step-content">
        <strong>ホームページの構成図</strong>
        <span>ページの内容や数のこと。ページ同士の関係性を決める。ディレクターがWF作成前に確認する設計図。</span>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">2</div>
      <div class="step-content">
        <strong>ユーザー向けナビゲーションページ（HTMLサイトマップ）</strong>
        <span>サイト内の全ページをリスト表示したページ。ユーザーが目的のページを素早く見つけられる。<strong>離脱防止</strong>に効果的。</span>
      </div>
    </div>
    <div class="step-item">
      <div class="step-num">3</div>
      <div class="step-content">
        <strong>検索エンジン向けXMLファイル（sitemap.xml）</strong>
        <span>サイト内全ページのURL・優先度・最終更新日・更新頻度を検索エンジン向けに記載したXML形式のファイル。</span>
      </div>
    </div>
  </div>
</div>
<div class="dc-section">
  <h2>XMLサイトマップの例</h2>
  <div class="code-block">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;
  &lt;url&gt;
    &lt;loc&gt;https://example.com/foo.html&lt;/loc&gt;
    &lt;lastmod&gt;2024-06-04&lt;/lastmod&gt;
    &lt;priority&gt;0.8&lt;/priority&gt;
  &lt;/url&gt;
&lt;/urlset&gt;</div>
</div>`
  },

  {
    id: 'wireframe', category: 'structure',
    title: 'ワイヤーフレーム（WF）',
    shortDesc: 'Webサイトの「何を・どこに・どのように」配置するかを決める設計図',
    tags: ['ワイヤーフレーム','WF','設計図','ディレクター','レイアウト','Figma'],
    content: `
<div class="dc-section">
  <h2>ワイヤーフレームとは</h2>
  <p>Webサイトの目的に応じて「何を・どこに・どのように」配置するかを決めるレイアウト図。ページの<strong>設計図</strong>であり、<strong>デザインではなく構造を決めるもの</strong>です。</p>
  <div class="highlight hl-purple">「ワイヤー（導線）」と「フレーム（枠組み）」＝ シンプルに要素・情報だけを配置し視覚化した骨組み</div>
</div>
<div class="dc-section">
  <h2>WFの目的</h2>
  <ul>
    <li><strong>構成を理解する</strong>：ページに必要な要素を整理し、抜け漏れや優先順位を明確にする</li>
    <li><strong>関係者の認識を合わせる</strong>：クライアント・デザイナー・開発者が同じ認識を持てる</li>
    <li><strong>デザイン・開発の土台を作る</strong>：後工程の指示書として機能する</li>
  </ul>
</div>
<div class="dc-section">
  <h2>WFに記載する内容</h2>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>種類</th><th>内容例</th></tr></thead>
      <tbody>
        <tr><td>レイアウト</td><td>ヘッダー / メインエリア / フッター</td></tr>
        <tr><td>コンテンツ</td><td>見出し / テキスト / 画像</td></tr>
        <tr><td>UI要素</td><td>ボタン / リンク / アイコン</td></tr>
        <tr><td>機能</td><td>フォーム / スライダー / アコーディオン</td></tr>
        <tr><td>注釈</td><td>CMS管理箇所 / アニメーションの動き</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="dc-section">
  <h2>作成手順（7ステップ）</h2>
  <div class="step-list">
    <div class="step-item"><div class="step-num">1</div><div class="step-content"><strong>サイトマップを確認</strong><span>どのページを作成するかを決める（TOP・下層・記事・お問い合わせ・サンクス等）</span></div></div>
    <div class="step-item"><div class="step-num">2</div><div class="step-content"><strong>ページの目的を決める</strong><span>TOP：サービス理解 ／ サービスページ：詳細説明 ／ LP：問い合わせ誘導</span></div></div>
    <div class="step-item"><div class="step-num">3</div><div class="step-content"><strong>コンテンツを洗い出す</strong><span>MV・サービス概要・特徴・料金・事例・Q&A・CTA など</span></div></div>
    <div class="step-item"><div class="step-num">4</div><div class="step-content"><strong>ユーザーの導線を設計</strong><span>どう読んで、どこで問い合わせるかの流れを考える</span></div></div>
    <div class="step-item"><div class="step-num">5</div><div class="step-content"><strong>レイアウトを作成</strong><span>ユーザー視点・SEO・CTA導線・コンテンツ量を考慮</span></div></div>
    <div class="step-item"><div class="step-num">6</div><div class="step-content"><strong>注釈・共有事項をメモで添付</strong><span>動きや条件分岐などをコメントで明記</span></div></div>
    <div class="step-item"><div class="step-num">7</div><div class="step-content"><strong>コンテンツの仮テキストを記載</strong><span>「〇〇のタイトルが入る」などのダミーテキストを入れる</span></div></div>
  </div>
</div>
<div class="dc-section">
  <h2>WF vs モックアップ vs プロトタイプ</h2>
  <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>種類</th><th>完成度</th><th>操作性</th><th>目的</th></tr></thead>
      <tbody>
        <tr><td>ワイヤーフレーム</td><td>低（骨組みのみ）</td><td>なし</td><td>構造・導線の確認</td></tr>
        <tr><td>モックアップ</td><td>中〜高（デザイン付き）</td><td>なし</td><td>見た目の確認</td></tr>
        <tr><td>プロトタイプ</td><td>高</td><td>あり</td><td>操作感・動作の確認</td></tr>
      </tbody>
    </table>
  </div>
</div>`
  },

];

// end of data
