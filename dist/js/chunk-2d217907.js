(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217907"],{c6ec:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this;e._self._c;return e._m(0)},n=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Export plugin")]),t("p",[e._v("The "),t("code",[e._v("Export")]),e._v(" plugin provides the export function.")]),t("h2",[e._v("Register")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" MindMap "),t("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),t("span",{staticClass:"hljs-string"},[e._v("'simple-mind-map'")]),e._v("\n"),t("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" Export "),t("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),t("span",{staticClass:"hljs-string"},[e._v("'simple-mind-map/src/plugins/Export.js'")]),e._v("\n"),t("span",{staticClass:"hljs-comment"},[e._v("// import Export from 'simple-mind-map/src/Export.js' Use this path for versions below v0.6.0")]),e._v("\n\nMindMap.usePlugin(Export)\n")])]),t("p",[e._v("After registration and instantiation of "),t("code",[e._v("MindMap")]),e._v(", the instance can be obtained through "),t("code",[e._v("mindMap.doExport")]),e._v(".")]),t("h2",[e._v("Methods")]),t("p",[e._v("All exported methods are asynchronous and return an instance of "),t("code",[e._v("Promise")]),e._v(". You can use the "),t("code",[e._v("then")]),e._v(" method to obtain data, or use the "),t("code",[e._v("async await")]),e._v(" function to obtain:")]),t("pre",{staticClass:"hljs"},[t("code",[e._v("mindMap.doExport.png().then("),t("span",{staticClass:"hljs-function"},[e._v("("),t("span",{staticClass:"hljs-params"},[e._v("data")]),e._v(") =>")]),e._v(" {\n  "),t("span",{staticClass:"hljs-comment"},[e._v("// ...")]),e._v("\n})\n\n"),t("span",{staticClass:"hljs-keyword"},[e._v("const")]),e._v(" "),t("span",{staticClass:"hljs-keyword"},[e._v("export")]),e._v(" = "),t("span",{staticClass:"hljs-keyword"},[e._v("async")]),e._v(" () => {\n  "),t("span",{staticClass:"hljs-keyword"},[e._v("let")]),e._v(" data = "),t("span",{staticClass:"hljs-keyword"},[e._v("await")]),e._v(" mindMap.doExport.png()\n  "),t("span",{staticClass:"hljs-comment"},[e._v("// ...")]),e._v("\n}\n")])]),t("p",[e._v("The returned data is in the format of "),t("code",[e._v("data:URL")]),e._v(". You can create an "),t("code",[e._v("a")]),e._v(" tag to trigger the download:")]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[e._v("let")]),e._v(" a = "),t("span",{staticClass:"hljs-built_in"},[e._v("document")]),e._v(".createElement("),t("span",{staticClass:"hljs-string"},[e._v("'a'")]),e._v(")\na.href = "),t("span",{staticClass:"hljs-string"},[e._v("'xxx.png'")]),t("span",{staticClass:"hljs-comment"},[e._v("// .png、.svg、.pdf、.md、.json、.smm")]),e._v("\na.download = "),t("span",{staticClass:"hljs-string"},[e._v("'xxx'")]),e._v("\na.click()\n")])]),t("h3",[e._v("png(name, transparent = false, node = null)")]),t("blockquote",[t("p",[e._v("Versions below v0.9.2 are：png(name, transparent = false, checkRotate, compress)")])]),t("blockquote",[t("p",[e._v("Versions below v0.7.0 are: png(name, transparent = false, rotateWhenWidthLongerThenHeight)")])]),t("ul",[t("li",[t("p",[t("code",[e._v("name")]),e._v(": Name, optional")])]),t("li",[t("p",[t("code",[e._v("transparent")]),e._v(": v0.5.7+, Specify whether the background of the exported image is transparent")])]),t("li",[t("p",[t("code",[e._v("rotateWhenWidthLongerThenHeight")]),e._v(": v0.6.15+, V0.7.0+abandoned, Boolean, false, Automatically rotate 90 degrees when the image has a width to height ratio")])]),t("li",[t("p",[t("code",[e._v("checkRotate")]),e._v(": v0.7.0+, (v0.9.2+obsolete), Function, You can pass a function that takes two parameters, the width and height of the image, and returns true or false. True represents that the image needs to be rotated by 90 degrees")])]),t("li",[t("p",[t("code",[e._v("compress")]),e._v("：v0.8.1+, (v0.9.2+obsolete)，null | { width, height }, The parameter for compressing images. In some cases, the length and width of the exported image may be very large. If you want to reduce it, you can use this parameter to control it. Only one width or height can be provided, and it will be scaled proportionally")])]),t("li",[t("p",[t("code",[e._v("node")]),e._v("：v0.9.11+，Node instances, if passed, will only export the content of that node;")])])]),t("p",[e._v("Exports as "),t("code",[e._v("png")]),e._v(".")]),t("h3",[e._v("svg(name, plusCssText)")]),t("ul",[t("li",[t("p",[t("code",[e._v("name")]),e._v("："),t("code",[e._v("svg")]),e._v(" title")])]),t("li",[t("p",[t("code",[e._v("plusCssText")]),e._v("：v0.4.0+, （v0.6.16+This parameter has been removed and instead passed in through the "),t("code",[e._v("resetCss")]),e._v(" configuration during instantiation）, When node rich text editing is enabled and "),t("code",[e._v("domToImage")]),e._v(" passes "),t("code",[e._v("false")]),e._v(", additional "),t("code",[e._v("css")]),e._v(" styles can be added. If there is a "),t("code",[e._v("dom")]),e._v(" node in "),t("code",[e._v("svg")]),e._v(", you can set some styles for the node through this parameter, such as:")])])]),t("pre",{staticClass:"hljs"},[t("code",[e._v("svg(\n  "),t("span",{staticClass:"hljs-string"},[e._v("''")]),e._v(", \n  "),t("span",{staticClass:"hljs-literal"},[e._v("false")]),e._v(", \n  "),t("span",{staticClass:"hljs-string"},[e._v("`* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }`")]),e._v("\n)\n")])]),t("p",[e._v("Exports as "),t("code",[e._v("svg")]),e._v(".")]),t("h3",[e._v("pdf(name, transparent = false)")]),t("blockquote",[t("p",[e._v("v0.8.1：pdf(name, useMultiPageExport, maxImageWidth)")])]),t("blockquote",[t("p",[e._v("v0.2.1+")])]),t("ul",[t("li",[t("p",[t("code",[e._v("name")]),e._v("：File name")])]),t("li",[t("p",[t("code",[e._v("useMultiPageExport")]),e._v(": v0.6.15+, (v0.9.2+obsolete), Boolean, false, Whether to export multiple pages, default to single page")])]),t("li",[t("p",[t("code",[e._v("maxImageWidth")]),e._v("：v0.8.1+, (v0.9.2+obsolete)，null | Number，The default is twice the width of A4 paper, which is a parameter for compressing images. In some cases, the length and width of the image may be very large, resulting in a very large PDF volume. Therefore, if you want to reduce the volume, you can use this parameter to control the maximum width of the image")])]),t("li",[t("p",[t("code",[e._v("transparent")]),e._v("：v0.9.2+，Boolean，default is false，Specify whether the background of the exported image is transparent")])])]),t("p",[e._v("Export as "),t("code",[e._v("pdf")]),e._v(". Unlike other export methods, this method does not return data and directly triggers the download.")]),t("blockquote",[t("p",[e._v("In versions before v0.9.3, this method does not return data and will directly trigger the download.")])]),t("blockquote",[t("p",[e._v("After v0.6.0, an additional ExportPDF plugin needs to be registered")])]),t("blockquote",[t("p",[e._v("The internal export of PDF uses the PDF lib library to convert images into PDF. Currently, when exporting PDF with a large number of nodes, some content may be lost. Therefore, it is recommended that capable developers implement the PDF export function themselves. If there are backend developers in the project, they can also seek support from backend developers.")])]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" ExportPDF "),t("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),t("span",{staticClass:"hljs-string"},[e._v("'simple-mind-map/src/plugins/ExportPDF.js'")]),e._v("\nMindMap.usePlugin(ExportPDF)\n")])]),t("h3",[e._v("json(name, withConfig)")]),t("p",[t("code",[e._v("name")]),e._v("：It is temporarily useless, just pass an empty string")]),t("p",[t("code",[e._v("withConfig``：Boolean")]),e._v(", default "),t("code",[e._v("true")]),e._v(", Whether the data contains configuration, otherwise it is pure mind map node data")]),t("p",[e._v("Return "),t("code",[e._v("json")]),e._v(" data.")]),t("h3",[e._v("md()")]),t("blockquote",[t("p",[e._v("v0.4.7+")])]),t("p",[e._v("Export as "),t("code",[e._v("markdown")]),e._v(" file.")]),t("h3",[e._v("getSvgData(node)")]),t("p",[t("code",[e._v("node")]),e._v(": v0.9.11+, Node instance, if passed, will return a 'clipData' object, representing the position coordinate data of the node region cropped from the complete image;")]),t("p",[e._v("Gets "),t("code",[e._v("svg")]),e._v(" data, an async method that returns an object:")]),t("pre",{staticClass:"hljs"},[t("code",[e._v("{\n  node, "),t("span",{staticClass:"hljs-comment"},[e._v("// svg node")]),e._v("\n  str, "),t("span",{staticClass:"hljs-comment"},[e._v("// svg string")]),e._v("\n  clipData\n}\n")])]),t("h3",[e._v("xmind(name)")]),t("blockquote",[t("p",[e._v("v0.6.6+, an additional ExportXMind plugin needs to be registered")])]),t("pre",{staticClass:"hljs"},[t("code",[t("span",{staticClass:"hljs-keyword"},[e._v("import")]),e._v(" ExportXMind "),t("span",{staticClass:"hljs-keyword"},[e._v("from")]),e._v(" "),t("span",{staticClass:"hljs-string"},[e._v("'simple-mind-map/src/plugins/ExportXMind.js'")]),e._v("\nMindMap.usePlugin(ExportXMind)\n")])]),t("p",[e._v("Export as an "),t("code",[e._v("xmind")]),e._v(" file type, asynchronous method, returns a "),t("code",[e._v("Promise")]),e._v(" instance, and the returned data is the "),t("code",[e._v("data:url")]),e._v(" data of a "),t("code",[e._v("zip")]),e._v(" compressed package, which can be directly downloaded.")]),t("h3",[e._v("txt()")]),t("blockquote",[t("p",[e._v("v0.9.8+")])]),t("p",[e._v("Export as "),t("code",[e._v("txt")]),e._v(" file.")])])}],o={},i=o,r=s("2877"),l=Object(r["a"])(i,a,n,!1,null,null,null);t["default"]=l.exports}}]);