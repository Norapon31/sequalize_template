'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductUniqs', [
        {
            "productID": "PD001",
            "SKU": "SKU001",
            "barCode": "Bar001",
            "photoURL": "https://sprofile.line-scdn.net/0huZ2usrQwKnUfDDwSCyhUCm9cKR88fXNnMmo3RC8JdRF2Pj92ZGo1EywEdUxxPWt3YWlgFHlcc0UTH10TAVrWQRg8dEImOGgnM21nlQ",
            "link": "https://health.mthai.com/howto/health-care/29710.html\nhttp://www.rakbankerd.com/agriculture/page.php?id=1136&s=tblplant",
            "discount": "0",
            "price": "40",
            "priceDiscount": "40",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "productID": "PD002",
            "SKU": "SKU002",
            "barCode": "Bar001",
            "photoURL": "https://sprofile.line-scdn.net/0huZ2usrQwKnUfDDwSCyhUCm9cKR88fXNnMmo3RC8JdRF2Pj92ZGo1EywEdUxxPWt3YWlgFHlcc0UTH10TAVrWQRg8dEImOGgnM21nlQ",
            "link": "https://www.sanook.com/health/3373/\nhttps://health.kapook.com/view141273.html",
            "discount": "0",
            "price": "50",
            "priceDiscount": "50",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "productID": "PD003",
            "SKU": "SKU003",
            "barCode": "Bar001",
            "photoURL": "https://sprofile.line-scdn.net/0huZ2usrQwKnUfDDwSCyhUCm9cKR88fXNnMmo3RC8JdRF2Pj92ZGo1EywEdUxxPWt3YWlgFHlcc0UTH10TAVrWQRg8dEImOGgnM21nlQ",
            "link": "https://health.kapook.com/view133914.html\nhttps://www.sanook.com/health/4517/",
            "discount": "5",
            "price": "50",
            "priceDiscount": "47.5",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "productID": "PD004",
            "SKU": "SKU004",
            "barCode": "Bar001",
            "photoURL": "https://sprofile.line-scdn.net/0huZ2usrQwKnUfDDwSCyhUCm9cKR88fXNnMmo3RC8JdRF2Pj92ZGo1EywEdUxxPWt3YWlgFHlcc0UTH10TAVrWQRg8dEImOGgnM21nlQ",
            "link": "https://www.xn--12cg1cxchd0a2gzc1c5d5a.net/%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B8%E0%B8%A1/\nhttps://women.thaiza.com/health/387460/",
            "discount": "0",
            "price": "45",
            "priceDiscount": "45",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "productID": "PD005",
            "SKU": "SKU005",
            "barCode": "Bar001",
            "photoURL": "https://sprofile.line-scdn.net/0huZ2usrQwKnUfDDwSCyhUCm9cKR88fXNnMmo3RC8JdRF2Pj92ZGo1EywEdUxxPWt3YWlgFHlcc0UTH10TAVrWQRg8dEImOGgnM21nlQ",
            "link": "https://cities.trueid.net/article/%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%82%E0%B8%A2%E0%B8%8A%E0%B8%99%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94%E0%B8%8A%E0%B8%B4%E0%B9%80%E0%B8%A1%E0%B8%88%E0%B8%B4-trueidintrend_52206",
            "discount": "0",
            "price": "45",
            "priceDiscount": "45",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "productID": "PD006",
            "SKU": "SKU006",
            "barCode": "Bar001",
            "photoURL": "https://sprofile.line-scdn.net/0huZ2usrQwKnUfDDwSCyhUCm9cKR88fXNnMmo3RC8JdRF2Pj92ZGo1EywEdUxxPWt3YWlgFHlcc0UTH10TAVrWQRg8dEImOGgnM21nlQ",
            "link": "https://www.youtube.com/watch?v=Y7YXOUVWw8U",
            "discount": "10",
            "price": "80",
            "priceDiscount": "72",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "productID": "PD007",
            "SKU": "SKU007",
            "barCode": "Bar001",
            "photoURL": "https://sprofile.line-scdn.net/0huZ2usrQwKnUfDDwSCyhUCm9cKR88fXNnMmo3RC8JdRF2Pj92ZGo1EywEdUxxPWt3YWlgFHlcc0UTH10TAVrWQRg8dEImOGgnM21nlQ",
            "link": "https://www.youtube.com/watch?v=wjBhTOaQPE0",
            "discount": "5",
            "price": "100",
            "priceDiscount": "95",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "productID": "PD008",
            "SKU": "SKU008",
            "barCode": "Bar001",
            "photoURL": "https://sprofile.line-scdn.net/0huZ2usrQwKnUfDDwSCyhUCm9cKR88fXNnMmo3RC8JdRF2Pj92ZGo1EywEdUxxPWt3YWlgFHlcc0UTH10TAVrWQRg8dEImOGgnM21nlQ",
            "link": "https://www.youtube.com/watch?v=HLd1W_8o-oA",
            "discount": "5",
            "price": "120",
            "priceDiscount": "114",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "productID": "PD009",
            "SKU": "SKU009",
            "barCode": "Bar001",
            "photoURL": "https://sprofile.line-scdn.net/0huZ2usrQwKnUfDDwSCyhUCm9cKR88fXNnMmo3RC8JdRF2Pj92ZGo1EywEdUxxPWt3YWlgFHlcc0UTH10TAVrWQRg8dEImOGgnM21nlQ",
            "link": "https://www.youtube.com/watch?v=btrqvjylBog",
            "discount": "0",
            "price": "135",
            "priceDiscount": "135",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "productID": "PD010",
            "SKU": "SKU010",
            "barCode": "Bar001",
            "photoURL": "https://sprofile.line-scdn.net/0huZ2usrQwKnUfDDwSCyhUCm9cKR88fXNnMmo3RC8JdRF2Pj92ZGo1EywEdUxxPWt3YWlgFHlcc0UTH10TAVrWQRg8dEImOGgnM21nlQ",
            "link": "https://www.youtube.com/watch?v=aCAe3pIF51o",
            "discount": "5",
            "price": "140",
            "priceDiscount": "133",
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductUniqs', null, {});
  }
};
