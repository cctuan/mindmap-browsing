export default {
  baseStyle: {
    title: '基礎樣式',
    background: '背景',
    color: '顏色',
    image: '圖片',
    imageRepeat: '圖片重複',
    imagePosition: '圖片位置',
    imageSize: '圖片大小',
    line: '連線',
    width: '粗細',
    style: '風格',
    lineRadius: '圓角大小',
    lineOfOutline: '概要的連線',
    showArrow: '是否顯示箭頭',
    nodePadding: '節點內邊距',
    nodeMargin: '節點外邊距',
    horizontal: '水平',
    vertical: '垂直',
    maximumWidth: '顯示的最大寬度',
    maximumHeight: '顯示的最大高度',
    icon: '圖標',
    size: '大小',
    level2Node: '二級節點',
    belowLevel2Node: '三級及以下節點',
    nodeBorderType: '節點邊框風格',
    nodeUseLineStyle: '是否使用只有底邊框的風格',
    otherConfig: '其他配置',
    enableFreeDrag: '是否開啟節點自由拖拽',
    watermark: '水印',
    showWatermark: '是否顯示水印',
    watermarkDefaultText: '水印文字',
    onlyExport: '是否僅在導出時顯示',
    watermarkText: '水印文字',
    watermarkTextColor: '文字顏色',
    watermarkLineSpacing: '水印行間距',
    watermarkTextSpacing: '水印文字間距',
    watermarkAngle: '旋轉角度',
    watermarkTextOpacity: '文字透明度',
    watermarkTextFontSize: '文字字號',
    isEnableNodeRichText: '是否開啟節點富文本編輯',
    mousewheelAction: '鼠標滾輪行為',
    zoomView: '縮放視圖',
    moveViewUpDown: '上下移動畫布',
    associativeLine: '關聯線',
    associativeLineWidth: '粗細',
    associativeLineColor: '顏色',
    associativeLineActiveWidth: '激活粗細',
    associativeLineActiveColor: '激活顏色',
    mousewheelZoomActionReverse: '鼠標滾輪縮放',
    mousewheelZoomActionReverse1: '向前縮小向後放大',
    mousewheelZoomActionReverse2: '向前放大向後縮小',
    createNewNodeBehavior: '創建新節點的行為',
    default: '激活新節點及進入編輯',
    notActive: '不激活新節點',
    activeOnly: '只激活新節點，不進入編輯',
    rootStyle: '根節點',
    associativeLineText: '關聯線文字',
    fontFamily: '字體',
    fontSize: '字號',
    isShowScrollbar: '是否顯示滾動條',
    isUseHandDrawnLikeStyle: '是否開啟手繪風格',
    rootLineStartPos: '根節點連線起始位置',
    center: '中心',
    right: '右側',
    rainbowLines: '彩虹線條',
    notUseRainbowLines: '不使用彩虹線條'
  },
  color: {
    moreColor: '更多顏色'
  },
  contextmenu: {
    insertSiblingNode: '插入同級節點',
    insertChildNode: '插入子級節點',
    insertAiChildNode: '插入AI子級節點',
    insertParentNode: '插入父節點',
    insertSummary: '插入概要',
    moveUpNode: '上移節點',
    moveDownNode: '下移節點',
    deleteNode: '刪除節點',
    deleteCurrentNode: '僅刪除當前節點',
    copyNode: '複製節點',
    cutNode: '剪切節點',
    pasteNode: '粘貼節點',
    backCenter: '回到根節點',
    expandAll: '展開所有',
    unExpandAll: '收起所有',
    expandTo: '展開到',
    arrangeLayout: '一鍵整理佈局',
    level1: '一級主題',
    level2: '二級主題',
    level3: '三級主題',
    level4: '四級主題',
    level5: '五級主題',
    level6: '六級主題',
    zenMode: '禪模式',
    fitCanvas: '適應畫布',
    removeImage: '移除圖片',
    removeHyperlink: '移除超鏈接',
    removeNote: '移除備註',
    removeCustomStyles: '一鍵去除自定義樣式',
    removeAllNodeCustomStyles: '一鍵去除所有節點自定義樣式',
    exportNodeToPng: '導出該節點為圖片'
  },
  count: {
    words: '字數',
    nodes: '節點'
  },
  dialog: {
    cancel: '取消',
    confirm: '確定'
  },
  export: {
    title: '導出',
    filename: '導出文件名稱',
    include: '是否包含主題、結構等配置數據',
    dedicatedFile: '專有文件',
    jsonFile: 'json文件',
    imageFile: '圖片文件',
    svgFile: 'svg文件',
    pdfFile: 'pdf文件',
    markdownFile: 'markdown文件',
    tips: 'tips：.smm和.json文件可用於導入',
    isTransparent: '背景是否透明',
    pngTips: 'tips：富文本模式導出圖片非常耗時，建議導出為svg格式',
    svgTips: 'tips：富文本模式導出圖片非常耗時',
    transformingDomToImages: '正在轉換節點：',
    notifyTitle: '消息',
    notifyMessage: '如果沒有觸發下載，請檢查是否被瀏覽器攔截了',
    paddingX: '水平內邊距',
    paddingY: '垂直內邊距',
    useMultiPageExport: '是否多頁導出',
    defaultFileName: '思維導圖',
    addFooterText: '底部添加文字',
    addFooterTextPlaceholder: '比如：來自simple-mind-map'
  },
  fullscreen: {
    fullscreenShow: '全屏查看',
    fullscreenEdit: '全屏編輯'
  },
  demonstrate: {
    demonstrate: '進入演示模式'
  },
  import: {
    title: '導入',
    selectFile: '選取文件',
    supportFile: '支持.smm、.json、.xmind、.xlsx、.md文件',
    enableFileTip: '請選擇.smm、.json、.xmind、.xlsx、.md文件',
    maxFileNum: '最多只能選擇一個文件',
    notSelectTip: '請選擇要導入的文件',
    fileContentError: '文件內容有誤',
    importSuccess: '導入成功',
    fileParsingFailed: '文件解析失敗'
  },
  navigatorToolbar: {
    openMiniMap: '開啟小地圖',
    closeMiniMap: '關閉小地圖',
    readonly: '切換為只讀模式',
    edit: '切換為編輯模式',
    backToRoot: '回到根節點',
    changeSourceCodeEdit: '切換為源碼編輯模式'
  },
  nodeHyperlink: {
    title: '超鏈接',
    link: '鏈接',
    name: '名稱'
  },
  nodeIcon: {
    title: '圖標'
  },
  nodeImage: {
    title: '圖片',
    imgTitle: '圖片標題'
  },
  nodeAI: {
    title: 'AI工具',
  },
  nodeNote: {
    title: '備註'
  },
  nodeTag: {
    title: '標籤',
    addTip: '請按回車鍵添加'
  },
  outline: {
    title: '大綱',
    nodeDefaultText: '分支節點'
  },
  aiTool: {
    title: 'AI工具',
    nodeDefaultText: 'AI工具'
  },
  scale: {
    zoomIn: '放大',
    zoomOut: '縮小'
  },
  shortcutKey: {
    title: '快捷鍵'
  },
  strusture: {
    title: '結構'
  },
  style: {
    title: '節點樣式',
    normal: '常態',
    active: '選中狀態',
    text: '文字',
    fontFamily: '字體',
    fontSize: '字號',
    lineHeight: '行高',
    color: '顏色',
    addFontWeight: '加粗',
    italic: '斜體',
    textDecoration: '劃線',
    none: '無',
    underline: '下劃線',
    lineThrough: '中劃線',
    overline: '上劃線',
    border: '邊框',
    style: '樣式',
    width: '寬度',
    borderRadius: '圓角',
    background: '背景',
    shape: '形狀',
    line: '線條',
    nodePadding: '節點內邊距',
    horizontal: '水平',
    vertical: '垂直',
    gradientStyle: '漸變',
    startColor: '起始',
    endColor: '結束',
    arrowDir: '箭頭位置',
    arrowDirStart: '頭部',
    arrowDirEnd: '尾部'
  },
  themestructure: {
    title: '主題與結構',
    classics: '經典',
    dark: '深色',
    simple: '樸素',
    coverTip: '你當前自定義過基礎樣式，是否覆蓋？',
    tip: '提示',
    cover: '覆蓋',
    reserve: '保留',
    structure: '結構'
  },
  toolbar: {
    undo: '回退',
    redo: '前進',
    insertSiblingNode: '同級節點',
    insertChildNode: '子節點',
    aiTool: 'AI工具',
    deleteNode: '刪除節點',
    image: '圖片',
    icon: '圖標',
    link: '超鏈接',
    note: '備註',
    tag: '標籤',
    summary: '概要',
    displayOutline: '顯示大綱',
    baseStyle: '基礎樣式',
    theme: '主題',
    strusture: '結構',
    newFile: '新建',
    openFile: '打開',
    saveAs: '另存為',
    import: '導入',
    export: '導出',
    shortcutKey: '快捷鍵',
    associativeLine: '關聯線',
    painter: '格式刷',
    formula: '公式',
    attachment: '附件',
    more: '更多',
    selectFileTip: '請選擇文件',
    notSupportTip: '你的瀏覽器不支持該功能，或者當前頁面非https協議',
    tip: '提示',
    editingLocalFileTipFront: '當前正在編輯你本機的【',
    editingLocalFileTipEnd: '】文件',
    fileContentError: '文件內容有誤',
    fileOpenFailed: '文件打開失敗',
    defaultFileName: '思維導圖',
    creatingTip: '正在創建文件',
    directory: '目錄'
  },
  edit: {
    newFeatureNoticeTitle: '新特性提醒',
    newFeatureNoticeMessage:
      '本次更新支持了節點富文本編輯，但是存在一定缺陷，最主要的影響是導出為圖片的時間和節點數量成正比，所以對導出需求比較依賴的話可以通過【基礎樣式】-【其他配置】-【是否開啟節點富文本編輯】設置關掉富文本編輯模式。',
    root: '根節點',
    splitByWrap: '是否按換行自動分割節點？',
    tip: '提示',
    yes: '是',
    no: '否',
    exportError: '導出失敗',
    dragTip: '在此釋放以導入該文件'
  },
  mouseAction: {
    tip1: '當前：左鍵拖動畫布，右鍵框選節點',
    tip2: '當前：左鍵框選節點，右鍵拖動畫布'
  },
  search: {
    searchPlaceholder: '請輸入查找內容',
    replacePlaceholder: '請輸入替換內容',
    replace: '替換',
    replaceAll: '全部替換',
    cancel: '取消'
  },
  nodeIconSidebar: {
    title: '圖標/貼紙',
    icon: '圖標',
    sticker: '貼紙'
  },
  formulaSidebar: {
    title: '公式',
    placeholder: '請輸入 LaTeX 語法',
    confirm: '完成',
    common: '常用公式',
    tip: '非富文本模式下不支持插入公式'
  },
  richTextToolbar: {
    bold: '加粗',
    italic: '斜體',
    underline: '下劃線',
    strike: '刪除線',
    fontFamily: '字體',
    fontSize: '字號',
    color: '字體顏色',
    backgroundColor: '背景顏色',
    removeFormat: '清除樣式'
  },
  other: {
    loading: '正在加載，請稍後...'
  },
  sourceCodeEdit: {
    sourceCodeTip: '富文本模式下不建議修改樣式，因為需要同步修改數據及html結構。',
    format: '格式化',
    copy: '複製',
    confirm: '完成',
    close: '關閉',
    formatErrorTip: 'JSON格式有誤，請檢查後再試',
    copyTip: '已複製到剪貼板',
    formatTip: '格式化完成'
  },
  attachment: {
    deleteAttachment: '刪除附件',
    tip: '附件功能僅在客戶端可用'
  }
}
