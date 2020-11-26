(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{381:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"processing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#processing"}},[t._v("#")]),t._v(" Processing")]),t._v(" "),a("h2",{attrs:{id:"retimeglucose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retimeglucose"}},[t._v("#")]),t._v(" retimeGlucose")]),t._v(" "),a("div",{staticClass:"language-MATLAB extra-class"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" dataRetimed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("retimeGlucose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timestep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Function that retimes the given "),a("code",[t._v("data")]),t._v(" timetable to a"),a("br"),t._v("\nnew timetable with homogeneous "),a("code",[t._v("timestep")]),t._v(". It puts nans where glucose datapoints are missing and it uses mean to solve conflicts (i.e., when two glucose datapoints have the same retimed timestamp.")]),t._v(" "),a("h3",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("data: timetable (required)")]),t._v(" "),a("br"),t._v("\nA timetable with columns "),a("code",[t._v("Time")]),t._v(" and "),a("code",[t._v("glucose")]),t._v(" containing the glucose data to analyze (mg/dl);")]),t._v(" "),a("li",[a("strong",[t._v("timestep: integer (required)")]),t._v(" "),a("br"),t._v("\nAn integer defining the timestep to use in the new timetable.")])]),t._v(" "),a("h3",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("dataRetimed: timetable")]),t._v(" "),a("br"),t._v("\nThe retimed timetable with columns "),a("code",[t._v("Time")]),t._v(" and "),a("code",[t._v("glucose")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"preconditions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preconditions"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("data")]),t._v(" must be a timetable;")]),t._v(" "),a("li",[a("code",[t._v("timestep")]),t._v(" must be an integer.")])]),t._v(" "),a("h3",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("ul",[a("li",[t._v("None")])]),t._v(" "),a("h2",{attrs:{id:"imputeglucose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#imputeglucose"}},[t._v("#")]),t._v(" imputeGlucose")]),t._v(" "),a("div",{staticClass:"language-MATLAB extra-class"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" dataImputed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("imputeGlucose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timestep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Function that imputes missing glucose data using linear interpolation. The function imputes only missing data gaps of maximum "),a("code",[t._v("maxGap")]),t._v(" minutes. Gaps longer than "),a("code",[t._v("maxGap")]),t._v(" minutes are ignored.")]),t._v(" "),a("h3",{attrs:{id:"inputs-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs-2"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("data: timetable (required)")]),t._v(" "),a("br"),t._v("\nA timetable with columns "),a("code",[t._v("Time")]),t._v(" and "),a("code",[t._v("glucose")]),t._v(" containing the glucose data to analyze (mg/dl);")]),t._v(" "),a("li",[a("strong",[t._v("maxGap: integer (required)")]),t._v(" "),a("br"),t._v("\nAn integer defining the maximum interpol-able missing data gaps (min).")])]),t._v(" "),a("h3",{attrs:{id:"output-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-2"}},[t._v("#")]),t._v(" Output")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("dataImputed: timetable")]),t._v(" "),a("br"),t._v("\nThe imputed timetable with columns "),a("code",[t._v("Time")]),t._v(" and "),a("code",[t._v("glucose")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"preconditions-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preconditions-2"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("data")]),t._v(" must be a timetable having an homogeneous time grid;")]),t._v(" "),a("li",[a("code",[t._v("maxGap")]),t._v(" must be an integer.")])]),t._v(" "),a("h3",{attrs:{id:"reference-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-2"}},[t._v("#")]),t._v(" Reference")]),t._v(" "),a("ul",[a("li",[t._v("None")])])])}),[],!1,null,null,null);e.default=n.exports}}]);