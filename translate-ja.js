(function () {
  'use strict';

  var storage_key = 'ochreotter_language';
  var button_id = 'language-toggle';
  var original_title = document.title;
  var original_description = get_meta_description();
  var text_translations = {
    'Experience': '経験',
    'Tech Stack': '技術スタック',
    'Featured Work': '主な実績',
    'Interests': '関心領域',
    'Full Stack Engineer from Japan': '日本のフルスタックエンジニア',
    'Building practical systems with PHP, Laravel, Python, Linux, and AI-assisted development workflows.': 'PHP、Laravel、Python、Linux、AI支援開発ワークフローを使って、実用的なシステムを構築しています。',
    'Focused on backend architecture, automation, developer productivity, and real-world system operations.': 'バックエンドアーキテクチャ、自動化、開発者生産性、実運用に耐えるシステム運用に注力しています。',
    'View Work': '実績を見る',
    'Explore Stack': '技術を見る',
    'Currently working on': '現在取り組んでいること',
    'AI driven development workflows and backend architecture.': 'AI駆動の開発ワークフローとバックエンドアーキテクチャ。',
    'Currently learning': '現在学んでいること',
    'Modern AI coding workflows and automation.': 'モダンなAIコーディングワークフローと自動化。',
    'Ask me about': '相談できること',
    'PHP, Laravel, Linux, AI coding tools, SQL optimization, and backend development.': 'PHP、Laravel、Linux、AIコーディングツール、SQL最適化、バックエンド開発。',
    'Practical Engineering': '実践的なエンジニアリング',
    'Interested in scalable system design, developer productivity, and automation that holds up in day-to-day operations.': 'スケーラブルなシステム設計、開発者生産性、日々の運用に耐える自動化に関心があります。',
    'Collaboration': '協業',
    'Developer tools': '開発者ツール',
    'Practical automation projects': '実用的な自動化プロジェクト',
    'Maintainable backend systems': '保守しやすいバックエンドシステム',
    'Focus': '注力分野',
    'Backend architecture': 'バックエンドアーキテクチャ',
    'Automation': '自動化',
    'Developer productivity': '開発者生産性',
    'Fun Fact': 'ちょっとしたこと',
    'I sometimes spend more time optimizing workflows than writing actual code.': '実際にコードを書く時間より、ワークフローを最適化している時間のほうが長くなることがあります。',
    'From server-side development to client communication, with an emphasis on systems that survive real production use.': 'サーバーサイド開発から顧客対応まで、実運用に耐えるシステムを重視しています。',
    'Backend / Server Side': 'バックエンド / サーバーサイド',
    'Business logic design': 'ビジネスロジック設計',
    'API integration': 'API連携',
    'Batch processing': 'バッチ処理',
    'PDF / CSV generation': 'PDF / CSV生成',
    'ORM / Query Builder development': 'ORM / クエリビルダー開発',
    'Migration system development': 'マイグレーションシステム開発',
    'Performance optimization': 'パフォーマンス最適化',
    'Offline-compatible systems': 'オフライン対応システム',
    'Database design': 'データベース設計',
    'Frontend': 'フロントエンド',
    'CRUD systems': 'CRUDシステム',
    'Admin dashboards': '管理ダッシュボード',
    'Inventory systems': '在庫管理システム',
    'Portal sites': 'ポータルサイト',
    'UI/UX improvements': 'UI/UX改善',
    'Leadership / Management': 'リーダーシップ / マネジメント',
    'Requirement hearing': '要件ヒアリング',
    'Client communication': '顧客コミュニケーション',
    'Task management': 'タスク管理',
    'Code review': 'コードレビュー',
    'Team mentoring': 'チームメンタリング',
    'Technical proposal': '技術提案',
    'Tools and platforms used across backend systems, automation, infrastructure, and delivery workflows.': 'バックエンドシステム、自動化、インフラ、デリバリーワークフローで使用しているツールとプラットフォームです。',
    'Languages': '言語',
    'Backend': 'バックエンド',
    'Custom Frameworks': '独自フレームワーク',
    'Infrastructure': 'インフラ',
    'Database': 'データベース',
    'Tools': 'ツール',
    'Representative systems involving backend design, infrastructure, operations, and legacy modernization.': 'バックエンド設計、インフラ、運用、レガシー刷新に関わった代表的なシステムです。',
    'Mechanical Parts Estimation & Ordering System': '機械部品の見積・発注システム',
    'Full-stack development from requirement definition to operation': '要件定義から運用までのフルスタック開発',
    'PM role with direct client communication': '顧客と直接やり取りするPMロール',
    'Infrastructure setup, backend, frontend, and maintenance': 'インフラ構築、バックエンド、フロントエンド、保守',
    'Jewelry Inventory Management System': '宝飾品在庫管理システム',
    'Migrated VBA-based legacy systems to web applications': 'VBAベースのレガシーシステムをWebアプリケーションへ移行',
    'Implemented SQL Server synchronization across mixed OS environments': '混在OS環境でのSQL Server同期を実装',
    'Mentored team members using Docker-based development environments': 'Dockerベースの開発環境を使ったチームメンバーのメンタリング',
    'Airport Management Systems': '空港管理システム',
    'Developed offline-compatible airport systems': 'オフライン対応の空港システムを開発',
    'Built flight information display interfaces': 'フライト情報表示インターフェースを構築',
    'Learned and utilized GCP-based workflows': 'GCPベースのワークフローを習得・活用',
    'Areas I keep returning to when building, improving, and operating software.': 'ソフトウェアを作り、改善し、運用する中で継続的に取り組んでいる領域です。',
    'AI Assisted Coding': 'AI支援コーディング',
    'Backend Engineering': 'バックエンドエンジニアリング',
    'Legacy System Modernization': 'レガシーシステム刷新',
    'Developer Productivity': '開発者生産性',
    'Performance Optimization': 'パフォーマンス最適化',
    'System Design': 'システム設計',
    'Developer Experience': '開発者体験',
    'Production First': '本番運用を第一に',
    'Keep It Maintainable': '保守性を大切に',
    'Automate Everything Possible': '可能な限り自動化',
    'Measure Before Optimizing': '最適化の前に計測',
    'ochreotter - Full Stack Engineer from Japan': 'ochreotter - 日本のフルスタックエンジニア'
  };
  var attribute_translations = {
    'ochreotter home': 'ochreotter ホーム',
    'Primary navigation': 'メインナビゲーション',
    'Page sections': 'ページセクション',
    'Current focus': '現在の注力領域',
    'Engineering philosophy': 'エンジニアリング哲学'
  };
  var reverse_text_translations = reverse_map(text_translations);
  var reverse_attribute_translations = reverse_map(attribute_translations);

  function reverse_map(map) {
    var reversed = {};

    Object.keys(map).forEach(function (key) {
      reversed[map[key]] = key;
    });

    return reversed;
  }

  function normalize_text(value) {
    return value.replace(/\s+/g, ' ').trim();
  }

  function get_meta_description() {
    var meta = document.querySelector('meta[name="description"]');

    return meta ? meta.getAttribute('content') : '';
  }

  function set_meta_description(value) {
    var meta = document.querySelector('meta[name="description"]');

    if (meta) {
      meta.setAttribute('content', value);
    }
  }

  function translate_text_nodes(map) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!normalize_text(node.nodeValue)) {
          return NodeFilter.FILTER_REJECT;
        }

        if (node.parentElement && node.parentElement.closest('script, style')) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    var node;

    while ((node = walker.nextNode())) {
      nodes.push(node);
    }

    nodes.forEach(function (text_node) {
      var original_text = normalize_text(text_node.nodeValue);

      if (map[original_text]) {
        text_node.nodeValue = text_node.nodeValue.replace(original_text, map[original_text]);
      }
    });
  }

  function translate_attributes(map) {
    var elements = document.querySelectorAll('[aria-label]');

    elements.forEach(function (element) {
      var original_label = element.getAttribute('aria-label');

      if (map[original_label]) {
        element.setAttribute('aria-label', map[original_label]);
      }
    });
  }

  function set_language(language) {
    var is_japanese = language === 'ja';
    var button = document.getElementById(button_id);

    translate_text_nodes(is_japanese ? text_translations : reverse_text_translations);
    translate_attributes(is_japanese ? attribute_translations : reverse_attribute_translations);
    document.documentElement.lang = is_japanese ? 'ja' : 'en';
    document.title = is_japanese ? 'ochreotter | フルスタックエンジニア' : original_title;
    set_meta_description(is_japanese ? 'ochreotter - 日本のフルスタックエンジニア。PHP、Laravel、Python、Linux、自動化、AI支援開発ワークフロー。' : original_description);

    if (button) {
      button.textContent = is_japanese ? 'English' : '日本語';
      button.setAttribute('aria-label', is_japanese ? 'Switch page language to English' : 'ページを日本語に切り替え');
    }

    window.localStorage.setItem(storage_key, is_japanese ? 'ja' : 'en');
  }

  function create_toggle_button() {
    if (document.getElementById(button_id)) {
      return;
    }

    var button = document.createElement('button');
    button.id = button_id;
    button.type = 'button';
    button.textContent = '日本語';
    button.setAttribute('aria-label', 'ページを日本語に切り替え');
    button.style.position = 'fixed';
    button.style.right = '16px';
    button.style.top = '82px';
    button.style.zIndex = '2147483647';
    button.style.border = '1px solid rgba(0, 0, 0, 0.18)';
    button.style.borderRadius = '999px';
    button.style.background = '#111827';
    button.style.color = '#ffffff';
    button.style.font = '600 14px/1 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    button.style.padding = '10px 14px';
    button.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.18)';
    button.style.cursor = 'pointer';
    button.addEventListener('click', function () {
      var next_language = document.documentElement.lang === 'ja' ? 'en' : 'ja';

      set_language(next_language);
    });

    document.body.appendChild(button);
  }

  function initialize() {
    create_toggle_button();

    if (window.localStorage.getItem(storage_key) === 'ja') {
      set_language('ja');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
    return;
  }

  initialize();
})();
