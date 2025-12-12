(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EligibilityPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/finonest-website-build-6/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/finonest-website-build-6/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/finonest-website-build-6/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/finonest-website-build-6/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$components$2f$parallax$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/finonest-website-build-6/components/parallax-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/finonest-website-build-6/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/finonest-website-build-6/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/finonest-website-build-6/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Desktop/finonest-website-build-6/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/Desktop/finonest-website-build-6/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/Desktop/finonest-website-build-6/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript) <export default as IndianRupee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Desktop/finonest-website-build-6/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/Desktop/finonest-website-build-6/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/finonest-website-build-6/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/Desktop/finonest-website-build-6/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Desktop/finonest-website-build-6/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const steps = [
    {
        id: 1,
        title: "Personal Details",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
    },
    {
        id: 2,
        title: "Employment Info",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
    },
    {
        id: 3,
        title: "Financial Details",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"]
    },
    {
        id: 4,
        title: "Loan Requirement",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    }
];
const loanTypes = [
    {
        id: "personal",
        label: "Personal Loan",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
    },
    {
        id: "home",
        label: "Home Loan",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        id: "business",
        label: "Business Loan",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
    },
    {
        id: "credit",
        label: "Credit Card",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
    }
];
const employmentTypes = [
    {
        id: "salaried",
        label: "Salaried"
    },
    {
        id: "self-employed",
        label: "Self Employed"
    },
    {
        id: "business",
        label: "Business Owner"
    },
    {
        id: "professional",
        label: "Professional"
    }
];
function EligibilityPage() {
    _s();
    const { setIsHoveringCTA } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$components$2f$parallax$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParallax"])();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        age: "",
        employmentType: "",
        monthlyIncome: "",
        existingEMI: "",
        creditScore: "",
        loanType: "",
        loanAmount: "",
        tenure: ""
    });
    const [showResult, setShowResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [eligibilityResult, setEligibilityResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const nextStep = ()=>{
        if (currentStep < 4) {
            setCurrentStep((prev)=>prev + 1);
        } else {
            calculateEligibility();
        }
    };
    const prevStep = ()=>{
        if (currentStep > 1) {
            setCurrentStep((prev)=>prev - 1);
        }
    };
    const calculateEligibility = ()=>{
        // Simulated eligibility calculation
        const income = Number.parseInt(formData.monthlyIncome) || 0;
        const existingEMI = Number.parseInt(formData.existingEMI) || 0;
        const availableIncome = income - existingEMI;
        const maxEMI = availableIncome * 0.5;
        const maxAmount = Math.round(maxEMI * 60) // Assuming 5 year tenure
        ;
        setEligibilityResult({
            eligible: income >= 25000,
            maxAmount: `₹${(maxAmount / 100000).toFixed(1)} Lakhs`,
            rate: formData.loanType === "home" ? "8.5%" : formData.loanType === "personal" ? "10.5%" : "12%",
            emi: `₹${Math.round(maxEMI).toLocaleString()}`
        });
        setShowResult(true);
    };
    const resetForm = ()=>{
        setCurrentStep(1);
        setShowResult(false);
        setEligibilityResult(null);
        setFormData({
            name: "",
            email: "",
            phone: "",
            age: "",
            employmentType: "",
            monthlyIncome: "",
            existingEMI: "",
            creditScore: "",
            loanType: "",
            loanAmount: "",
            tenure: ""
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            className: "inline-block px-4 py-2 bg-[#F4D86B]/10 rounded-full text-[#0A1F44] text-sm font-medium mb-4",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            children: "Quick Eligibility Check"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                            className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-4 text-balance",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.1
                            },
                            children: [
                                "Check Your",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-transparent bg-clip-text bg-gradient-to-r from-[#F4D86B] to-[#FFB800]",
                                    children: "Loan Eligibility"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            className: "text-lg text-gray-600 max-w-2xl mx-auto",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.2
                            },
                            children: "Answer a few simple questions to find out how much you can borrow and at what rate."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                !showResult ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex items-center justify-center mb-12",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.3
                            },
                            children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: `flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${currentStep >= step.id ? "bg-[#F4D86B] border-[#F4D86B] text-[#0A1F44]" : "bg-white border-gray-200 text-gray-400"}`,
                                            animate: {
                                                scale: currentStep === step.id ? 1.1 : 1
                                            },
                                            children: currentStep > step.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 46
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(step.icon, {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 85
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 19
                                        }, this),
                                        index < steps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-16 sm:w-24 h-1 mx-2 rounded-full transition-colors ${currentStep > step.id ? "bg-[#F4D86B]" : "bg-gray-200"}`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, step.id, true, {
                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "bg-white rounded-3xl shadow-xl shadow-black/5 p-8 md:p-12",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.4
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "wait",
                                    children: [
                                        currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                x: -20
                                            },
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-[#111111] mb-6",
                                                    children: "Personal Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid sm:grid-cols-2 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                                    children: "Full Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: formData.name,
                                                                    onChange: (e)=>handleInputChange("name", e.target.value),
                                                                    className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4D86B] focus:ring-2 focus:ring-[#F4D86B]/20 outline-none transition-all",
                                                                    placeholder: "Enter your full name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                                    children: "Age"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                    lineNumber: 233,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: formData.age,
                                                                    onChange: (e)=>handleInputChange("age", e.target.value),
                                                                    className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4D86B] focus:ring-2 focus:ring-[#F4D86B]/20 outline-none transition-all",
                                                                    placeholder: "Your age"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid sm:grid-cols-2 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                                    children: "Email Address"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "email",
                                                                    value: formData.email,
                                                                    onChange: (e)=>handleInputChange("email", e.target.value),
                                                                    className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4D86B] focus:ring-2 focus:ring-[#F4D86B]/20 outline-none transition-all",
                                                                    placeholder: "your@email.com"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 245,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                                    children: "Phone Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                    lineNumber: 256,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "tel",
                                                                    value: formData.phone,
                                                                    onChange: (e)=>handleInputChange("phone", e.target.value),
                                                                    className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4D86B] focus:ring-2 focus:ring-[#F4D86B]/20 outline-none transition-all",
                                                                    placeholder: "+91 98765 43210"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, "step1", true, {
                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, this),
                                        currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                x: -20
                                            },
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-[#111111] mb-6",
                                                    children: "Employment Information"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-3",
                                                            children: "Employment Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-4",
                                                            children: employmentTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                                    onClick: ()=>handleInputChange("employmentType", type.id),
                                                                    className: `p-4 rounded-2xl border-2 text-left transition-all ${formData.employmentType === type.id ? "border-[#F4D86B] bg-[#F4D86B]/5" : "border-gray-200 hover:border-gray-300"}`,
                                                                    whileHover: {
                                                                        scale: 1.02
                                                                    },
                                                                    whileTap: {
                                                                        scale: 0.98
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `font-medium ${formData.employmentType === type.id ? "text-[#0A1F44]" : "text-gray-700"}`,
                                                                        children: type.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                        lineNumber: 295,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, type.id, false, {
                                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                    lineNumber: 284,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                                            children: "Monthly Income (₹)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: formData.monthlyIncome,
                                                            onChange: (e)=>handleInputChange("monthlyIncome", e.target.value),
                                                            className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4D86B] focus:ring-2 focus:ring-[#F4D86B]/20 outline-none transition-all",
                                                            placeholder: "e.g., 50000"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, "step2", true, {
                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                            lineNumber: 271,
                                            columnNumber: 19
                                        }, this),
                                        currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                x: -20
                                            },
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-[#111111] mb-6",
                                                    children: "Financial Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                                            children: "Existing Monthly EMIs (₹)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 332,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: formData.existingEMI,
                                                            onChange: (e)=>handleInputChange("existingEMI", e.target.value),
                                                            className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4D86B] focus:ring-2 focus:ring-[#F4D86B]/20 outline-none transition-all",
                                                            placeholder: "Total of all existing EMIs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                                            children: "Credit Score (if known)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: formData.creditScore,
                                                            onChange: (e)=>handleInputChange("creditScore", e.target.value),
                                                            className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4D86B] focus:ring-2 focus:ring-[#F4D86B]/20 outline-none transition-all",
                                                            placeholder: "e.g., 750"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500 mt-2",
                                                            children: "Leave blank if you don't know your credit score"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, "step3", true, {
                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 19
                                        }, this),
                                        currentStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                x: -20
                                            },
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold text-[#111111] mb-6",
                                                    children: "Loan Requirement"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-3",
                                                            children: "Type of Loan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 368,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-4",
                                                            children: loanTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                                    onClick: ()=>handleInputChange("loanType", type.id),
                                                                    className: `p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${formData.loanType === type.id ? "border-[#F4D86B] bg-[#F4D86B]/5" : "border-gray-200 hover:border-gray-300"}`,
                                                                    whileHover: {
                                                                        scale: 1.02
                                                                    },
                                                                    whileTap: {
                                                                        scale: 0.98
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(type.icon, {
                                                                            className: `w-5 h-5 ${formData.loanType === type.id ? "text-[#F4D86B]" : "text-gray-400"}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                            lineNumber: 382,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `font-medium ${formData.loanType === type.id ? "text-[#F4D86B]" : "text-gray-700"}`,
                                                                            children: type.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                            lineNumber: 387,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, type.id, true, {
                                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                    lineNumber: 371,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 369,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid sm:grid-cols-2 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                                    children: "Loan Amount Required (₹)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                    lineNumber: 401,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: formData.loanAmount,
                                                                    onChange: (e)=>handleInputChange("loanAmount", e.target.value),
                                                                    className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4D86B] focus:ring-2 focus:ring-[#F4D86B]/20 outline-none transition-all",
                                                                    placeholder: "e.g., 500000"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                    lineNumber: 402,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                                    children: "Preferred Tenure (Years)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                    lineNumber: 411,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: formData.tenure,
                                                                    onChange: (e)=>handleInputChange("tenure", e.target.value),
                                                                    className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#F4D86B] focus:ring-2 focus:ring-[#F4D86B]/20 outline-none transition-all",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Select tenure"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                            lineNumber: 417,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "1",
                                                                            children: "1 Year"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                            lineNumber: 418,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "2",
                                                                            children: "2 Years"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                            lineNumber: 419,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "3",
                                                                            children: "3 Years"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                            lineNumber: 420,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "5",
                                                                            children: "5 Years"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                            lineNumber: 421,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "7",
                                                                            children: "7 Years"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                            lineNumber: 422,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "10",
                                                                            children: "10 Years"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                            lineNumber: 423,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                                    lineNumber: 412,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, "step4", true, {
                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                            lineNumber: 358,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mt-10 pt-6 border-t border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            onClick: prevStep,
                                            className: `flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-colors ${currentStep === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:bg-gray-100"}`,
                                            disabled: currentStep === 1,
                                            whileHover: currentStep > 1 ? {
                                                scale: 1.02
                                            } : {},
                                            whileTap: currentStep > 1 ? {
                                                scale: 0.98
                                            } : {},
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 19
                                                }, this),
                                                "Previous"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            onClick: nextStep,
                                            className: "flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#F4D86B] to-[#FFB800] text-[#0A1F44] rounded-2xl font-semibold shadow-lg shadow-[#F4D86B]/25",
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: 0.98
                                            },
                                            onMouseEnter: ()=>setIsHoveringCTA(true),
                                            onMouseLeave: ()=>setIsHoveringCTA(false),
                                            children: currentStep === 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    "Check Eligibility",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    "Next Step",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                            lineNumber: 446,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                    lineNumber: 432,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /* Results */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "bg-white rounded-3xl shadow-xl shadow-black/5 p-8 md:p-12",
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    children: eligibilityResult?.eligible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",
                                initial: {
                                    scale: 0
                                },
                                animate: {
                                    scale: 1
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "w-10 h-10 text-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                    lineNumber: 484,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                lineNumber: 478,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-[#111111] mb-2",
                                children: "Congratulations!"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                lineNumber: 487,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-8",
                                children: "You are eligible for a loan. Here are your personalized offers:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                lineNumber: 488,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid sm:grid-cols-3 gap-6 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "bg-gradient-to-br from-[#F4D86B]/10 to-[#F4D86B]/20 rounded-3xl p-6",
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-500 mb-1",
                                                children: "Maximum Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                lineNumber: 497,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl font-bold text-[#0A1F44]",
                                                children: eligibilityResult.maxAmount
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                lineNumber: 498,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                        lineNumber: 491,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "bg-gradient-to-br from-[#FFB800]/10 to-[#FFB800]/20 rounded-3xl p-6",
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-500 mb-1",
                                                children: "Interest Rate"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                lineNumber: 506,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl font-bold text-[#FFB800]",
                                                children: eligibilityResult.rate
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                lineNumber: 507,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                        lineNumber: 500,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "bg-gradient-to-br from-[#0A1F44]/10 to-[#0A1F44]/20 rounded-3xl p-6",
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.3
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-500 mb-1",
                                                children: "Max EMI Capacity"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                lineNumber: 515,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl font-bold text-[#0A1F44]",
                                                children: eligibilityResult.emi
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                lineNumber: 516,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                        lineNumber: 509,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                lineNumber: 490,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            className: "flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F4D86B] to-[#FFB800] text-[#0A1F44] rounded-2xl font-semibold shadow-lg",
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: 0.98
                                            },
                                            onMouseEnter: ()=>setIsHoveringCTA(true),
                                            onMouseLeave: ()=>setIsHoveringCTA(false),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                    lineNumber: 529,
                                                    columnNumber: 23
                                                }, this),
                                                "Apply Now"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                            lineNumber: 522,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                        lineNumber: 521,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: resetForm,
                                        className: "px-8 py-4 text-gray-600 hover:bg-gray-100 rounded-2xl font-medium transition-colors",
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        whileTap: {
                                            scale: 0.98
                                        },
                                        children: "Check Again"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                        lineNumber: 533,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                lineNumber: 520,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                        lineNumber: 477,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6",
                                initial: {
                                    scale: 0
                                },
                                animate: {
                                    scale: 1
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                    className: "w-10 h-10 text-amber-500"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                    lineNumber: 551,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                lineNumber: 545,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-[#111111] mb-2",
                                children: "Let's Talk!"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                lineNumber: 554,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-8 max-w-md mx-auto",
                                children: "Based on your inputs, we'd like to discuss your options with you personally. Our experts can help find the right solution."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                lineNumber: 555,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            className: "flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F4D86B] to-[#FFB800] text-[#0A1F44] rounded-2xl font-semibold shadow-lg",
                                            whileHover: {
                                                scale: 1.02
                                            },
                                            whileTap: {
                                                scale: 0.98
                                            },
                                            children: [
                                                "Contact Us",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                            lineNumber: 562,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                        lineNumber: 561,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        onClick: resetForm,
                                        className: "px-8 py-4 text-gray-600 hover:bg-gray-100 rounded-2xl font-medium transition-colors",
                                        whileHover: {
                                            scale: 1.02
                                        },
                                        whileTap: {
                                            scale: 0.98
                                        },
                                        children: "Try Again"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                        lineNumber: 571,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                                lineNumber: 560,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                        lineNumber: 544,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
                    lineNumber: 471,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
            lineNumber: 137,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/finonest-website-build-6/app/eligibility/page.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s(EligibilityPage, "d3zzdYAj5a7zRENfwZ2vu57iIP8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$finonest$2d$website$2d$build$2d$6$2f$components$2f$parallax$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParallax"]
    ];
});
_c = EligibilityPage;
var _c;
__turbopack_context__.k.register(_c, "EligibilityPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_finonest-website-build-6_app_eligibility_page_tsx_02ba27ec._.js.map