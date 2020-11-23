(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{364:function(t,n,e){"use strict";e.r(n);var s=e(42),a=Object(s.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"inspection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inspection"}},[t._v("#")]),t._v(" Inspection")]),t._v(" "),e("h2",{attrs:{id:"findnanislands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#findnanislands"}},[t._v("#")]),t._v(" findNanIslands")]),t._v(" "),e("div",{staticClass:"language-MATLAB extra-class"},[e("pre",{pre:!0,attrs:{class:"language-matlab"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("shortNan"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" longNan"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nanStart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nanEnd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("findNanIslands")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("TH"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Function that locates nan sequences in vector "),e("code",[t._v("data")]),t._v(", and classifies them based on their length (longer or not than the specified threshold "),e("code",[t._v("TH")]),t._v(").")]),t._v(" "),e("h3",{attrs:{id:"inputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("data: vector of double (required)")]),t._v(" "),e("br"),t._v("\nA vector of double of equally spaced (in time) values;")]),t._v(" "),e("li",[e("strong",[t._v("TH: integer (required)")]),t._v("\nA integer defining the threshold, expressed in number of samples, to distinguish between long and short nan sequences.")])]),t._v(" "),e("h3",{attrs:{id:"outputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("shortNan: vector of integer")]),t._v(" "),e("br"),t._v('\nVector of integer that contains the indices of "short nan" sequences (i.e., sequences shorter than '),e("code",[t._v("TH")]),t._v(" consecutive nan samples);")]),t._v(" "),e("li",[e("strong",[t._v("longNan: vector of integer")]),t._v(" "),e("br"),t._v('\nVector of integer that contains the indices of "long nan" sequences (i.e., sequences having '),e("code",[t._v("TH")]),t._v(" consecutive nan samples or more);")]),t._v(" "),e("li",[e("strong",[t._v("nanStart: vector of integer")]),t._v(" "),e("br"),t._v("\nVector of integer containing the start indices of the nan sequences;")]),t._v(" "),e("li",[e("strong",[t._v("nanEnd: vector of integer")]),t._v(" "),e("br"),t._v("\nVector of integer containing the last indices of the nan sequences.")])])])}),[],!1,null,null,null);n.default=a.exports}}]);