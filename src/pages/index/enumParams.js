// 运营商
export const serviceProvider = [{
    label: '不限',
    value: 0
}, {
    label: '联通',
    value: 1
}, {
    label: '移动',
    value: 2
}, {
    label: '电信',
    value: 3
}, {
    label: '广电',
    value: 4
}]

// 默认排序
export const defaultSort = [{
    label: '默认排序',
    value: 0
}, {
    label: '价格从低到高',
    value: 1
}, {
    label: '价格从高到低',
    value: 2
}]

// 配送方式
export const deliveryMethod = [{
    label: '快递送货',
    value: 0
}, {
    label: '当面过户',
    value: 1
}, {
    label: '客户自取',
    value: 2
}]

// 运营商筛选
export const serviceProviderFilter = [{
    label: '联通',
    value: 1
}, {
    label: '移动',
    value: 2
}, {
    label: '电信',
    value: 3
}, {
    label: '广电',
    value: 4
}]

// 靓号规则
export const numberSegmentRule = {
    "DuiChen": {
        "featureName": "对称号",
        "ruleList": [
            {
                "ruleName": "ABCDABCD",
                "ruleCode": "WB12",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 595,
                "priceWeight": 822,
                "queryKey": "tailRule",
                "features": "000001",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "TB",
                        "desc": "头部"
                    },
                    {
                        "code": "XS",
                        "desc": "相似"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "ABCDEABCDE",
                "ruleCode": "WB63",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 590,
                "priceWeight": 818,
                "queryKey": "tailRule",
                "features": "000001",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "TB",
                        "desc": "头部"
                    },
                    {
                        "code": "XS",
                        "desc": "相似"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "ABCABC",
                "ruleCode": "WB15",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 585,
                "priceWeight": 618,
                "queryKey": "tailRule",
                "features": "000001",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "TB",
                        "desc": "头部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    },
                    {
                        "code": "XS",
                        "desc": "相似"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "ABCDDCBA",
                "ruleCode": "WB24",
                "luckyType": "",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 580,
                "priceWeight": 374,
                "queryKey": "tailRule",
                "features": "000001",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "TB",
                        "desc": "头部"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "ABCCBA",
                "ruleCode": "WB79",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 200,
                "priceWeight": 322,
                "queryKey": "tailRule",
                "features": "000001",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "TB",
                        "desc": "头部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "**AA**BB",
                "ruleCode": "WB118",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 180,
                "priceWeight": 230,
                "queryKey": "tailRule",
                "features": "000001",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "TB",
                        "desc": "头部"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "AB**AB**",
                "ruleCode": "WB33",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 1,
                "matchOrder": 175,
                "priceWeight": 186,
                "queryKey": "tailRule",
                "features": "000001",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "TB",
                        "desc": "头部"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            }
        ],
        "sort": 4
    },
    "BaoZi": {
        "featureName": "豹子号",
        "ruleList": [
            {
                "ruleName": "AAAAAAA",
                "ruleCode": "WB58",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 655,
                "priceWeight": 990,
                "queryKey": "tailRule",
                "features": "000004",
                "haveFreeNumberFlag": false,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "AAAAAA",
                "ruleCode": "WB59",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 645,
                "priceWeight": 986,
                "queryKey": "tailRule",
                "features": "000004",
                "haveFreeNumberFlag": false,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "AAAAA",
                "ruleCode": "WB01",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 640,
                "priceWeight": 982,
                "queryKey": "tailRule",
                "features": "000004",
                "haveFreeNumberFlag": false,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "AAAABBBB",
                "ruleCode": "WB64",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 635,
                "priceWeight": 978,
                "queryKey": "tailRule",
                "features": "000004",
                "haveFreeNumberFlag": false,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "AAAA",
                "ruleCode": "WB02",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 630,
                "priceWeight": 974,
                "queryKey": "tailRule",
                "features": "000004",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "ALMD",
                        "desc": "中间"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "AAABBB",
                "ruleCode": "WB60",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 625,
                "priceWeight": 970,
                "queryKey": "tailRule",
                "features": "000004",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "AAA*BBB",
                "ruleCode": "WB78",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 620,
                "priceWeight": 950,
                "queryKey": "tailRule",
                "features": "000004",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "TB",
                        "desc": "头部"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "AABBB",
                "ruleCode": "WB05",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 615,
                "priceWeight": 926,
                "queryKey": "tailRule",
                "features": "000004",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "AAAAAB",
                "ruleCode": "WB61",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 610,
                "priceWeight": 914,
                "queryKey": "tailRule",
                "features": "000004",
                "haveFreeNumberFlag": false,
                "sonTypeList": [],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "AAA",
                "ruleCode": "WB03",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 605,
                "priceWeight": 906,
                "queryKey": "tailRule",
                "features": "000004",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "ALMD",
                        "desc": "中间"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "AAAAB",
                "ruleCode": "WB06",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 600,
                "priceWeight": 898,
                "queryKey": "tailRule",
                "features": "000004",
                "haveFreeNumberFlag": true,
                "sonTypeList": [],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "AAAB",
                "ruleCode": "WB07",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 599,
                "priceWeight": 766,
                "queryKey": "tailRule",
                "features": "000004",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "ALMD",
                        "desc": "中间"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            }
        ],
        "sort": 1
    },
    "LiangHao": {
        "featureName": "小靓号",
        "ruleList": [
            {
                "ruleName": "老号段",
                "ruleCode": "WB153",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 290,
                "priceWeight": 422,
                "queryKey": "tailRule",
                "features": "000003",
                "haveFreeNumberFlag": true,
                "sonTypeList": [],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "1688",
                "ruleCode": "WB69",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 280,
                "priceWeight": 846,
                "queryKey": "tailRule",
                "features": "000003",
                "haveFreeNumberFlag": true,
                "sonTypeList": [],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "区号",
                "ruleCode": "WB151",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 270,
                "priceWeight": 390,
                "queryKey": "tailRule",
                "features": "000003",
                "haveFreeNumberFlag": true,
                "sonTypeList": [],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "ABBACC",
                "ruleCode": "WB189",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "matchOrder": 265,
                "priceWeight": 621,
                "queryKey": "tailRule",
                "features": "000003",
                "haveFreeNumberFlag": true,
                "sonTypeList": [],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "ABCCABDD",
                "ruleCode": "WB74",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 260,
                "priceWeight": 414,
                "queryKey": "tailRule",
                "features": "000003",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "TB",
                        "desc": "头部"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "ABACAD",
                "ruleCode": "WB155",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 258,
                "priceWeight": 386,
                "queryKey": "tailRule",
                "features": "000003",
                "haveFreeNumberFlag": true,
                "sonTypeList": [],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "A*AAB*BB",
                "ruleCode": "WB176",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 250,
                "priceWeight": 490,
                "queryKey": "tailRule",
                "features": "000003",
                "haveFreeNumberFlag": true,
                "sonTypeList": [],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "A*A*A*A*",
                "ruleCode": "WB36",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 170,
                "priceWeight": 218,
                "queryKey": "tailRule",
                "features": "000003",
                "haveFreeNumberFlag": true,
                "sonTypeList": [],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "1314",
                "ruleCode": "WB83",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 160,
                "priceWeight": 202,
                "queryKey": "tailRule",
                "features": "000003",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "XS",
                        "desc": "相似"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "乘法",
                "ruleCode": "WB129",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 150,
                "priceWeight": 246,
                "queryKey": "tailRule",
                "features": "000003",
                "haveFreeNumberFlag": true,
                "sonTypeList": [],
                "parentFlag": true,
                "oldSectionFlag": false
            }
        ],
        "sort": 5
    },
    "DuiZi": {
        "featureName": "对子号",
        "ruleList": [
            {
                "ruleName": "AABBCCDD",
                "ruleCode": "WB54",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 550,
                "priceWeight": 894,
                "queryKey": "tailRule",
                "features": "000005",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "ABABCDCD",
                "ruleCode": "WB55",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 545,
                "priceWeight": 890,
                "queryKey": "tailRule",
                "features": "000005",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "TB",
                        "desc": "头部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "AABBCC",
                "ruleCode": "WB08",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 540,
                "priceWeight": 830,
                "queryKey": "tailRule",
                "features": "000005",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    },
                    {
                        "code": "XS",
                        "desc": "相似"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "ABABAB",
                "ruleCode": "WB10",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 535,
                "priceWeight": 826,
                "queryKey": "tailRule",
                "features": "000005",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "TB",
                        "desc": "头部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    },
                    {
                        "code": "XS",
                        "desc": "相似"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "AABCC",
                "ruleCode": "WB47",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 530,
                "priceWeight": 550,
                "queryKey": "tailRule",
                "features": "000005",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "AABB",
                "ruleCode": "WB09",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 236,
                "priceWeight": 694,
                "queryKey": "tailRule",
                "features": "000005",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "ALMD",
                        "desc": "中间"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    },
                    {
                        "code": "XS",
                        "desc": "相似"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "ABAB",
                "ruleCode": "WB11",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 235,
                "priceWeight": 690,
                "queryKey": "tailRule",
                "features": "000005",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "ALMD",
                        "desc": "中间"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    },
                    {
                        "code": "XS",
                        "desc": "相似"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "ABAA",
                "ruleCode": "WB104",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 220,
                "priceWeight": 306,
                "queryKey": "tailRule",
                "features": "000005",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "ALMD",
                        "desc": "中间"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "AABA",
                "ruleCode": "WB103",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 210,
                "priceWeight": 310,
                "queryKey": "tailRule",
                "features": "000005",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "ALMD",
                        "desc": "中间"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "ABBA",
                "ruleCode": "WB77",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 205,
                "priceWeight": 318,
                "queryKey": "tailRule",
                "features": "000005",
                "haveFreeNumberFlag": true,
                "sonTypeList": [],
                "parentFlag": true,
                "oldSectionFlag": false
            }
        ],
        "sort": 2
    },
    "ShunZi": {
        "featureName": "顺序号",
        "ruleList": [
            {
                "ruleName": "ABCDEF",
                "ruleCode": "WB62",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 495,
                "priceWeight": 874,
                "queryKey": "tailRule",
                "features": "000002",
                "haveFreeNumberFlag": false,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "ABCDE",
                "ruleCode": "WB48",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 445,
                "priceWeight": 870,
                "queryKey": "tailRule",
                "features": "000002",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    },
                    {
                        "code": "XS",
                        "desc": "相似"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "ABCD",
                "ruleCode": "WB13",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 440,
                "priceWeight": 858,
                "queryKey": "tailRule",
                "features": "000002",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "ALMD",
                        "desc": "中间"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    },
                    {
                        "code": "XS",
                        "desc": "相似"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "FEDCBA",
                "ruleCode": "WB80",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 435,
                "priceWeight": 726,
                "queryKey": "tailRule",
                "features": "000002",
                "haveFreeNumberFlag": false,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "EDCBA",
                "ruleCode": "WB81",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 432,
                "priceWeight": 722,
                "queryKey": "tailRule",
                "features": "000002",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "DCBA",
                "ruleCode": "WB82",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 430,
                "priceWeight": 546,
                "queryKey": "tailRule",
                "features": "000002",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "ALMD",
                        "desc": "中间"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            },
            {
                "ruleName": "ABC",
                "ruleCode": "WB14",
                "ruleTypeCode": "ALTA",
                "operator": "000000",
                "recommendOrder": 0,
                "matchOrder": 234,
                "priceWeight": 586,
                "queryKey": "tailRule",
                "features": "000002",
                "haveFreeNumberFlag": true,
                "sonTypeList": [
                    {
                        "code": "ALTA",
                        "desc": "尾部"
                    },
                    {
                        "code": "RYBW",
                        "desc": "任意"
                    },
                    {
                        "code": "XS",
                        "desc": "相似"
                    }
                ],
                "parentFlag": true,
                "oldSectionFlag": false
            }
        ],
        "sort": 3
    },
    "Other": {
        "featureName": "其他",
        "sort": 6
    }
}

// 售价价格
export const priceList = [
    {
        "ruleName": "0元",
        "ruleCode": "09",
        "ruleTypeCode": "JGQJ",
        "operator": "000000",
        "recommendOrder": 0,
        "matchOrder": 99,
        "priceWeight": 99,
        "queryKey": "priceZone",
        "features": "000006",
        "priceRange": "0,0",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "0到200元",
        "ruleCode": "01",
        "ruleTypeCode": "JGQJ",
        "operator": "000000",
        "recommendOrder": 0,
        "matchOrder": 80,
        "priceWeight": 80,
        "queryKey": "priceZone",
        "features": "000006",
        "priceRange": "0,200",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "200到500元",
        "ruleCode": "02",
        "ruleTypeCode": "JGQJ",
        "operator": "000000",
        "recommendOrder": 0,
        "matchOrder": 70,
        "priceWeight": 70,
        "queryKey": "priceZone",
        "features": "000006",
        "priceRange": "200,500",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "500到1000元",
        "ruleCode": "03",
        "ruleTypeCode": "JGQJ",
        "operator": "000000",
        "recommendOrder": 0,
        "matchOrder": 60,
        "priceWeight": 60,
        "queryKey": "priceZone",
        "features": "000006",
        "priceRange": "500,1000",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "1000到2000元",
        "ruleCode": "04",
        "ruleTypeCode": "JGQJ",
        "operator": "000000",
        "recommendOrder": 0,
        "matchOrder": 50,
        "priceWeight": 50,
        "queryKey": "priceZone",
        "features": "000006",
        "priceRange": "1000,2000",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "2000到5000元",
        "ruleCode": "05",
        "ruleTypeCode": "JGQJ",
        "operator": "000000",
        "recommendOrder": 0,
        "matchOrder": 40,
        "priceWeight": 40,
        "queryKey": "priceZone",
        "features": "000006",
        "priceRange": "2000,5000",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "5000到10000元",
        "ruleCode": "06",
        "ruleTypeCode": "JGQJ",
        "operator": "000000",
        "recommendOrder": 0,
        "matchOrder": 30,
        "priceWeight": 30,
        "queryKey": "priceZone",
        "features": "000006",
        "priceRange": "5000,10000",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "10000到20000元",
        "ruleCode": "07",
        "ruleTypeCode": "JGQJ",
        "operator": "000000",
        "recommendOrder": 0,
        "matchOrder": 20,
        "priceWeight": 20,
        "queryKey": "priceZone",
        "features": "000006",
        "priceRange": "10000,20000",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "20000元以上",
        "ruleCode": "08",
        "ruleTypeCode": "JGQJ",
        "operator": "000000",
        "recommendOrder": 0,
        "matchOrder": 10,
        "priceWeight": 10,
        "queryKey": "priceZone",
        "features": "000006",
        "priceRange": "20000,",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    }
]

// 号段
export const sectionList = [
    {
        "ruleName": "139",
        "ruleCode": "139",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 100,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": true
    },
    {
        "ruleName": "138",
        "ruleCode": "138",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 100,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": true
    },
    {
        "ruleName": "137",
        "ruleCode": "137",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 96,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": true
    },
    {
        "ruleName": "136",
        "ruleCode": "136",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 95,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": true
    },
    {
        "ruleName": "135",
        "ruleCode": "135",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 94,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": true
    },
    {
        "ruleName": "134",
        "ruleCode": "134",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 93,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": true
    },
    {
        "ruleName": "188",
        "ruleCode": "188",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 89,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "187",
        "ruleCode": "187",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 88,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "183",
        "ruleCode": "183",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 86,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "182",
        "ruleCode": "182",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 84,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "184",
        "ruleCode": "184",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 83,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "159",
        "ruleCode": "159",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 79,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "158",
        "ruleCode": "158",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 78,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "157",
        "ruleCode": "157",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 77,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "152",
        "ruleCode": "152",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 76,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "151",
        "ruleCode": "151",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 75,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "150",
        "ruleCode": "150",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 74,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "198",
        "ruleCode": "198",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 73,
        "priceWeight": 73,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "195",
        "ruleCode": "195",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 72,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "178",
        "ruleCode": "178",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 71,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "172",
        "ruleCode": "172",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 70,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "197",
        "ruleCode": "197",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 70,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "186",
        "ruleCode": "186",
        "ruleTypeCode": "HD",
        "operator": "000002",
        "recommendOrder": 0,
        "matchOrder": 59,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "185",
        "ruleCode": "185",
        "ruleTypeCode": "HD",
        "operator": "000002",
        "recommendOrder": 0,
        "matchOrder": 58,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "130",
        "ruleCode": "130",
        "ruleTypeCode": "HD",
        "operator": "000002",
        "recommendOrder": 0,
        "matchOrder": 57,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "131",
        "ruleCode": "131",
        "ruleTypeCode": "HD",
        "operator": "000002",
        "recommendOrder": 0,
        "matchOrder": 56,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": true
    },
    {
        "ruleName": "132",
        "ruleCode": "132",
        "ruleTypeCode": "HD",
        "operator": "000002",
        "recommendOrder": 0,
        "matchOrder": 55,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": true
    },
    {
        "ruleName": "166",
        "ruleCode": "166",
        "ruleTypeCode": "HD",
        "operator": "000002",
        "recommendOrder": 0,
        "matchOrder": 54,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "156",
        "ruleCode": "156",
        "ruleTypeCode": "HD",
        "operator": "000002",
        "recommendOrder": 0,
        "matchOrder": 53,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": true
    },
    {
        "ruleName": "155",
        "ruleCode": "155",
        "ruleTypeCode": "HD",
        "operator": "000002",
        "recommendOrder": 0,
        "matchOrder": 52,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": true
    },
    {
        "ruleName": "196",
        "ruleCode": "196",
        "ruleTypeCode": "HD",
        "operator": "000002",
        "recommendOrder": 0,
        "matchOrder": 49,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "176",
        "ruleCode": "176",
        "ruleTypeCode": "HD",
        "operator": "000002",
        "recommendOrder": 0,
        "matchOrder": 45,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "175",
        "ruleCode": "175",
        "ruleTypeCode": "HD",
        "operator": "000002",
        "recommendOrder": 0,
        "matchOrder": 44,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "189",
        "ruleCode": "189",
        "ruleTypeCode": "HD",
        "operator": "000003",
        "recommendOrder": 0,
        "matchOrder": 35,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": true
    },
    {
        "ruleName": "181",
        "ruleCode": "181",
        "ruleTypeCode": "HD",
        "operator": "000003",
        "recommendOrder": 0,
        "matchOrder": 34,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": true
    },
    {
        "ruleName": "180",
        "ruleCode": "180",
        "luckyType": "",
        "ruleTypeCode": "HD",
        "operator": "000003",
        "recommendOrder": 0,
        "matchOrder": 33,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": true
    },
    {
        "ruleName": "190",
        "ruleCode": "190",
        "ruleTypeCode": "HD",
        "operator": "000003",
        "recommendOrder": 0,
        "matchOrder": 30,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "133",
        "ruleCode": "133",
        "ruleTypeCode": "HD",
        "operator": "000003",
        "recommendOrder": 0,
        "matchOrder": 29,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": true
    },
    {
        "ruleName": "153",
        "ruleCode": "153",
        "ruleTypeCode": "HD",
        "operator": "000003",
        "recommendOrder": 0,
        "matchOrder": 28,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": true
    },
    {
        "ruleName": "192",
        "ruleCode": "192",
        "ruleTypeCode": "HD",
        "operator": "000004",
        "recommendOrder": 0,
        "matchOrder": 27,
        "priceWeight": 100,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "149",
        "ruleCode": "149",
        "ruleTypeCode": "HD",
        "operator": "000003",
        "recommendOrder": 0,
        "matchOrder": 26,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "199",
        "ruleCode": "199",
        "ruleTypeCode": "HD",
        "operator": "000003",
        "recommendOrder": 0,
        "matchOrder": 25,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "145",
        "ruleCode": "145",
        "ruleTypeCode": "HD",
        "operator": "000002",
        "recommendOrder": 0,
        "matchOrder": 25,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "193",
        "ruleCode": "193",
        "ruleTypeCode": "HD",
        "operator": "000003",
        "recommendOrder": 0,
        "matchOrder": 24,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "191",
        "ruleCode": "191",
        "ruleTypeCode": "HD",
        "operator": "000003",
        "recommendOrder": 0,
        "matchOrder": 22,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "177",
        "ruleCode": "177",
        "ruleTypeCode": "HD",
        "operator": "000003",
        "recommendOrder": 0,
        "matchOrder": 19,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "173",
        "ruleCode": "173",
        "ruleTypeCode": "HD",
        "operator": "000003",
        "recommendOrder": 0,
        "matchOrder": 18,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "147",
        "ruleCode": "147",
        "ruleTypeCode": "HD",
        "operator": "000001",
        "recommendOrder": 0,
        "matchOrder": 0,
        "priceWeight": 0,
        "queryKey": "numberSection",
        "features": "000006",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    }
]

// 月低消
export const priceLowCostList = [
    {
        "ruleName": "0元",
        "ruleCode": "01",
        "ruleTypeCode": "DXQJ",
        "operator": "000000",
        "recommendOrder": 0,
        "matchOrder": 18,
        "priceWeight": 0,
        "queryKey": "otherRule",
        "features": "000006",
        "priceRange": "0,0",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "50元以内",
        "ruleCode": "02",
        "ruleTypeCode": "DXQJ",
        "operator": "000000",
        "recommendOrder": 0,
        "matchOrder": 16,
        "priceWeight": 0,
        "queryKey": "otherRule",
        "features": "000006",
        "priceRange": "0,50",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "100元以内",
        "ruleCode": "03",
        "ruleTypeCode": "DXQJ",
        "operator": "000000",
        "recommendOrder": 0,
        "matchOrder": 14,
        "priceWeight": 0,
        "queryKey": "otherRule",
        "features": "000006",
        "priceRange": "0,100",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "200元以内",
        "ruleCode": "04",
        "ruleTypeCode": "DXQJ",
        "operator": "000000",
        "recommendOrder": 0,
        "matchOrder": 12,
        "priceWeight": 0,
        "queryKey": "otherRule",
        "features": "000006",
        "priceRange": "0,200",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "400元以内",
        "ruleCode": "05",
        "ruleTypeCode": "DXQJ",
        "operator": "000000",
        "recommendOrder": 0,
        "matchOrder": 10,
        "priceWeight": 0,
        "queryKey": "otherRule",
        "features": "000006",
        "priceRange": "0,400",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    },
    {
        "ruleName": "400元以上",
        "ruleCode": "06",
        "ruleTypeCode": "DXQJ",
        "operator": "000000",
        "recommendOrder": 0,
        "matchOrder": 8,
        "priceWeight": 0,
        "queryKey": "otherRule",
        "features": "000006",
        "priceRange": "400,",
        "haveFreeNumberFlag": false,
        "parentFlag": true,
        "oldSectionFlag": false
    }
]

// 吉祥数字
export const luckyNumber = [{
    label: '努力发达',
    value: '1',
}, {
    label: '大展鸿图',
    value: '2',
}, {
    label: '旭日升天',
    value: '3'
}]