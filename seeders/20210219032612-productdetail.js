'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductDetails', [
        {
            "catagoryId": "CatID_1",
            "productName": "เบบี้ฮ่องเต้",
            "content": "เบบี้ฮ่องเต้ 100 กรัม\nให้พลังงาน 13 กิโลแคลอรี่\nแคลเซียม 105 มิลลิกรัม\nวิตามินเอ 4,468 IU\nวิตามินบี1 0.04 มิลลิกรัม\nวิตามินบี2 0.07 มิลลิกรัม\nวิตามินบี3 0.5 มิลลิกรัม\nวิตามินบี6 0.19 มิลลิกรัม\nวิตามินซี 45 มิลลิกรัม\nวิตามินเค 45.5 มิลลิกรัม\nแมงกานีส 19 มิลลิกรัม\nธาตุเหล็ก 0.8 มิลลิกรัม\nฟอสฟอรัส 37 มิลลิกรัม\nโฟเลต 66 ไมโครกรัม\nโพแทสเซียม 252 มิลลิกรัม",
            "benefit": "1.เสริมสร้างกระดูกให้แข็งแรง\n2.กระตุ้นระบบไหลเวียนเลือด\n3.ช่วยให้ฟื้นตัวได้เร็วขึ้น\n4.ป้องกันโรคเรื้อรัง\n5.บำรุงสายตา\n6.บำรุงหัวใจและหลอดเลือด\n7.ช่วยเสริมสร้างระบบภูมิคุ้มกัน\n8.บำรุงผิว\n9.ลดความดันโลหิต",
            "recommendMenu": "กวางตุ้งฮ่องเต้ผัดหมูกุ้ง,เกี๊ยวน้ำฮ่องเต้,กุ้งผัดเบบี้ฮ่องเต้",
            "codeLng": "th",
            "productUniqId": "PD001",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_4",
            "productName": "เห็ดเข็มทอง",
            "content": "เห็ดเข็มทอง 100 กรัม \nน้ำ 88.34 กรัม\nพลังงาน 37 กิโลแคลอรี\nโปรตีน 2.66 กรัม\nไขมัน 0.29 กรัม\nคาร์โบไฮเดรต 7.81 กรัม\nไฟเบอร์ 2.7 กรัม\nน้ำตาล 0.22 กรัม\nธาตุเหล็ก 1.15 มิลลิกรัม\nแม็กนีเซียม 16 มิลลิกรัม\nฟอสฟอรัส 105 มิลลิกรัม\nโพแทสเซียม 359 มิลลิกรัม\nโซเดียม 3 มิลลิกรัม\nสังกะสี 0.65 มิลลิกรัม\nไธอะมิน 0.225 มิลลิกรัม\nไรโบฟลาวิน 0.200 มิลลิกรัม\nไนอะซิน 7.032 มิลลิกรัม\nวิตามินบี 6 0.100 มิลลิกรัม\nโฟเลต 48 ไมโครกรัม\nวิตามินดี 5 ยูนิต",
            "benefit": "1.ช่วยดักจับไขมันส่วนเกินในเลือด จึงช่วยลดน้ำหนักได้ และยังป้องกันโรคอ้วนได้อีกด้วย\n2.ทำให้ระบบขับถ่ายดีขึ้น\n3.บำรุงผิวพรรณให้มีน้ำมีนวลขึ้น\n4.ช่วยลดคอเลสเตอรอลในร่างกาย\n5.รักษาโรคตับ กระเพาะอาหาร และลำไส้เรื้อรัง\n6.มีสารเฟรมมูลิน (Flammulin) ที่สามารถยับยั้งการเจริญเติบโตของเซลล์มะเร็ง\n7.เสริมสร้างระบบภูมิคุ้มกันโรคให้กับร่างกาย\n8.ช่วยควบคุมระดับน้ำตาลในเลือดได้ จึงเหมาะกับผู้ป่วยโรคเบาหวาน\n9.บำรุงสมอง เสริมสร้างความจำให้ดีขึ้น\n10.กระตุ้นการทำงานของระบบเผาผลาญในร่ายกาย ช่วยให้ร่างกายดูดซับสารอาหารได้ดียิ่งขึ้น",
            "recommendMenu": "ไข่เจียวเห็ดเข็มทอง ,พล่าเห็ดเข็มทอง,เห็ดเข็มทองผัดเบคอน",
            "codeLng": "th",
            "productUniqId": "PD002",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_4",
            "productName": "เห็ดออรินจิ",
            "content": "เห็ดออรินจิ 100 กรัม\nปริมาณพลังงาน 24 แคลอรี\nโปรตีน 3.6 กรัม\n- คาร์โบไฮเดรต 7.4 กรัม\n- ไฟเบอร์ 4.3 กรัม\n- ไขมันไลโนเลอิก 170 มิลลิกรัม\n- แคลเซียม 1 มิลลิกรัม\n- ธาตุเหล็ก 0.3 มิลลิกรัม\n- แมกนีเซียม 15 มิลลิกรัม\n- ฟอสฟอรัส 120 มิลลิกรัม\n- โพแทสเซียม 460 มิลลิกรัม\n- โซเดียม 2 มิลลิกรัม\n- วิตามินดี 1.8 ไมโครกรัม\n- ไนอะซิน 8.1 มิลลิกรัม\n- โฟเลต 80 ไมโครกรัม\n- กรดแพนโทเทนิก 1.61 มิลลิกรัม\n- วิตามินบี 2 0.28 มิลลิกรัม\n- สังกะสี 0.15 มิลลิกรัม\n- เซเลเนียม 3 ไมโครกรัม",
            "benefit": "1.ช่วยต้านมะเร็ง เนื่องจากคุณสมบัติของสารต้านอนุมูลอิสระในเห็ดออรินจิ\n2.ช่วยลดอาการปวดตามส่วนต่างๆ ของร่างกาย\n3.ช่วยลดน้ำตาลในเลือด เหมาะกับผู้ที่เป็นโรคเบาหวาน และผู้ที่ต้องการลดน้ำหนัก\n4.ช่วยปรับสมดุลของร่างกาย ให้ทุกส่วนต่างๆ ทำงานได้ดียิ่งขึ้น\n5.ช่วยลดความดันโลหิตสูง ปรับความดันให้อยู่ในระดับปกติ\n6.มีคุณค่าทางโภชนาการคล้ายเนื้อสัตว์ สามารถทานควบคู่ไปกับผักสลัด หรือทำอาหารโดยใส่เห็ดแทนเนื้อสัตว์ได้\n7.ช่วยลดคอเลสเตอรอลในร่างกาย ก็เหมาะกับผู้ที่รักสุขภาพ และอยากลดน้ำหนักอีกนั่นแหละ\n8.บำรุงโลหิต ใครที่ประสบปัญหาโลหิตจาง ทานเห็ดออรินจิเป็นประจำช่วยได้แน่นอน",
            "recommendMenu": "เห็ดออรินจิผัดพริกเผา,ผัดเห็นออรินจิไข่ข้น,ต้มยำหมึกกรอบเห็ดออรินจิ",
            "codeLng": "th",
            "productUniqId": "PD003",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_4",
            "productName": "เห็ดแชมปิญอง",
            "content": "เห็ดแชมปิญองสุกปริมาณ 100 กรัม\nพลังงาน 16 ที่โลแคลอรี่\nคาร์โบไฮเตรท 1.5 กรัม\nไขมัน 0.5 กรัม\nโปรตีน 1.5 กรัม\nน้ำตาล 0.5 กรัม\nแศลเชียม 1.1 มีลลิกรัม\nโพแทสเซียม 100 มิลลิกรัม\nโซเดียม 380 มิสลิกรม",
            "benefit": "1.ช่วยป้องกันและต้านทานต่อโรคมะเร็งต่างๆ โดยเฉพาะโรคมะเร็งเต้านมในผู้หญิง\n2.ช่วยให้ร่างกายเกิดการสร้างภูมิคุ้มกันโรคได้ดี\n3.ช่วยลดระดับคอเลสเตอรอลและไขมันในเลือดได้อย่างดีเยี่ยม\n4.ช่วยขับหรือล้างสารพิษที่สะสมอยู่ในร่างกายออกมา\n5.ช่วยให้ร่างกายแข็งแรงมีพละกำลัง\n6.ช่วยทำให้ระบบขับถ่ายทำงานได้ดี ท้องไม่ผูก\n7.ช่วยทำให้ระบบเลือดภายในร่างกายไหลเวียนได้ดีขึ้น",
            "recommendMenu": "เต้าหู้ราดซอสเห็ด,ซุปเห็ดครีมเห็ดแชมปิญอง,เห็ดอบเนย",
            "codeLng": "th",
            "productUniqId": "PD004",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_4",
            "productName": "เห็ดชิเมจิขาว",
            "content": "เห็ดชิเมจิขาว 100 กรัม\nพลังงานทั้งหมด 36 กิโลแคลอรี่\nโปรตีน 3 กรัม\nคาร์โบไฮเดรต 6 กรัม\nไขมัน 0 กรัม",
            "benefit": "1.ช่วยป้องกันโรคมะเร็งได้ดีมากๆ และช่วยยับยั้งไม่ให้เซลล์มะเร็งเจริญเติบโตขึ้น\n2.ช่วยลดระดับน้ำตาลและปริมาณของไขมันที่อุดตันอยู่ในเส้นเลือด\n3.ช่วยให้ตับของเราไม่ต้องทำงานหนักมาก\n4.ช่วยล้างและขับสารพิษที่ตกค้างอยู่ในตับออกมา\n5.ช่วยในเรื่องของการควบคุมน้ำหนักได้ดี เพราะไม่มีไขมันที่ทำให้อ้วน และมีโซเดียมในปริมาณที่ต่ำมากๆ ทำให้ไม่เกิดภาวะตัวบวม\n6.มีอนุมูลอิสระที่ช่วยให้ร่างกายแข็งแรงไม่เจ็บป่วยบ่อย\n7.ช่วยป้องกันโรคโลหิตจาง",
            "recommendMenu": "เห็ดชิเมจผัดเนยซอสโชยุ,เห็ดชิเมจิผัดกะปิ,พาสต้าเห็นชิเมจิ",
            "codeLng": "th",
            "productUniqId": "PD005",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_2",
            "productName": "เบค่อน",
            "content": "ปริมาณต่อ 100 g\nแคลอรี (kcal) 540\nไขมันทั้งหมด 42 g \nไขมันอิ่มตัว 14 g \nไขมันไม่อิ่มตัวเชิงซ้อน 4.5 g \nกรดไขมันไม่อิ่มตัวมีพันธะคู่เดี่ยว 19 g \nไขมันทรานส์ 0 g \nคอเลสเตอรอล 110 mg \nโซเดียม 1,717 mg \nโพแทสเซียม 565 mg \nคาร์โบไฮเดรต 1.4 g \nเส้นใยอาหาร 0 g \nน้ำตาล 0 g \nโปรตีน 37 g \nวิตามินเอ 37 IU วิตามินซี 0 mg\nแคลเซียม 11 mg เหล็ก 1.4 mg\nวิตามินดี 42 IU วิตามินบี6 0.3 mg\nวิตามินบี12 1.2 µg แมกนีเซียม 33 mg",
            "benefit": "เบคอน…อุดมไปด้วยวิตามินบี 1 บี 3 และบี 12 รวมถึงสังกะสี ช่วยบำรุงผิว เส้นผม และดวงตา\nเบคอน…มี “ไนอาซิน” หรือวิตามินบี 3 ที่ช่วยให้คนเรามีอายุยืนขึ้น\nเบคอน…มีกรดอะมิโนจากโปรตีนที่ช่วยแก้อาการเมาค้าง\nเบคอน…มีโคเอนไซม์ Q1 ช่วยในการเบิร์นไขมัน เมื่อทำงานร่วมกับการออกกำลังกาย\nเบคอน…มี 45% ของไขมัน  เป็นไขมันไม่อิ่มตัวที่ดีต่อสุขภาพ",
            "recommendMenu": "-",
            "codeLng": "th",
            "productUniqId": "PD006",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_2",
            "productName": "ซี่โครงหมุ",
            "content": "ปริมาณต่อ 100 g\nแคลอรี (kcal) 277\nไขมันทั้งหมด 23 g \nไขมันอิ่มตัว 8 g \nไขมันไม่อิ่มตัวเชิงซ้อน 4 g \nกรดไขมันไม่อิ่มตัวมีพันธะคู่เดี่ยว 9 g \nไขมันทรานส์ 0.2 g \nคอเลสเตอรอล 80 mg \nโซเดียม 81 mg \nโพแทสเซียม 242 mg \nคาร์โบไฮเดรต 0 g \nเส้นใยอาหาร 0 g \nน้ำตาล 0 g \nโปรตีน 15 g \nวิตามินเอ 0 IU วิตามินซี 0 mg\nแคลเซียม 15 mg เหล็ก 0.9 mg\nวิตามินดี 91 IU วิตามินบี6 0.6 mg\nวิตามินบี12 0.4 µg แมกนีเซียม 16 mg",
            "benefit": "ประโยชน์ทางด้านโปรตีนเสริมสร้างร่างกาย,สร้างกระดูก และทำให้กระดูกแข็งแรงขึ้น",
            "recommendMenu": "-",
            "codeLng": "th",
            "productUniqId": "PD007",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_2",
            "productName": "ซี่โครงอ่อน",
            "content": "ปริมาณ 100 g มีพลังงานทั้งหมด 397 กิโลแคลอรี่, โปรตีน 29.1 กรัม, คาร์โบไฮเดรต 0 กรัม, ไขมัน 30.3 กรัม",
            "benefit": "ได้แคลเซียม เป็นสารตั้งต้นในการเจริญเติบโตของกระดูกและฟัน",
            "recommendMenu": "-",
            "codeLng": "th",
            "productUniqId": "PD008",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_3",
            "productName": "เมล่อนญี่ปุ่นเนื้อเขียว",
            "content": "ข้อมูลโภชนาการของเมล่อน 1 ถ้วย ปริมาณ 177 กรัม มีดังนี้\n\nพลังงาน 64 แคลอรี่ คาร์โบไฮเดรต 16 กรัม ไฟเบอร์ 1.4 กรัม โปรตีน 1 กรัม ไขมัน 0 กรัม วิตามินซี 5 คิดเป็น 3% ของปริมาณสารอาหารที่แนะนำให้บริโภคต่อวัน วิตามินบี 6 คิดเป็น 8% ของปริมาณสารอาหารที่แนะนำให้บริโภคต่อวัน โฟเลต คิดเป็น 8% ของปริมาณสารอาหารที่แนะนำให้บริโภคต่อวัน วิตามินเค คิดเป็น 6% ของปริมาณสารอาหารที่แนะนำให้บริโภคต่อวัน โพแทสเซียม คิดเป็น 12% ของปริมาณสารอาหารที่แนะนำให้บริโภคต่อวัน แมกนีเซียม คิดเป็น 4% ของปริมาณสารอาหารที่แนะนำให้บริโภคต่อวัน",
            "benefit": "ลดความดันโลหิตสูง,เสริมสร้างระบบภูมิคุ้มกัน,ช่วยให้ระบบย่อยอาหารทำงานได้อย่างมีประสิทธิภาพมาก,ต่อต้านอนุมูลอิสระ",
            "recommendMenu": "-",
            "codeLng": "th",
            "productUniqId": "PD009",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_3",
            "productName": "เมล่อนญี่ปุ่นเนื้อส้ม",
            "content": "ข้อมูลคุณค่าทางโภชนาการของเมล่อนต่อ 100 กรัม\nพลังงาน 34 กิโลแคลอรี\nคาร์โบไฮเดรต 8.16 กรัม\nน้ำตาล 7.86 กรัม\nเส้นใย 0.9 กรัม\nไขมัน 0.19 กรัม\nโปรตีน 0.84 กรัม\nวิตามินเอ 169 ไมโครกรัม 21%\nเบตาแคโรทีน 2,020 ไมโครกรัม 19%\nลูทีนและซีแซนทีน 26 ไมโครกรัม\nวิตามินบี 1 0.041 มิลลิกรัม 4%\nวิตามินบี 2 0.019 มิลลิกรัม 2%\nวิตามินบี 3 0.734 มิลลิกรัม 5%\nวิตามินบี 5 0.105 มิลลิกรัม 2%\nวิตามินบี 6 0.072 มิลลิกรัม 6%\nวิตามินบี 9 21 ไมโครกรัม 5%\nโคลีน 7.6 มิลลิกรัม 2%\nวิตามินซี 36.7 มิลลิกรัม 44%\nวิตามินเค 2.5 ไมโครกรัม 2%\nธาตุแคลเซียม 9 มิลลิกรัม 1%\nธาตุเหล็ก 0.21 มิลลิกรัม 2%\nธาตุแมกนีเซียม 12 มิลลิกรัม 3%\nธาตุแมงกานีส 0.41 มิลลิกรัม 20%\nธาตุฟอสฟอรัส 15 มิลลิกรัม 2%\nโพแทสเซียม 267 มิลลิกรัม 6%\nธาตุโซเดียม 16 มิลลิกรัม 1%\nธาตุสังกะสี 0.18 มิลลิกรัม 2%",
            "benefit": "ลดความดันโลหิตสูง,เสริมสร้างระบบภูมิคุ้มกัน,ช่วยให้ระบบย่อยอาหารทำงานได้อย่างมีประสิทธิภาพมาก,ต่อต้านอนุมูลอิสระ",
            "recommendMenu": "-",
            "codeLng": "th",
            "productUniqId": "PD010",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_1",
            "productName": "Baby Bok Choy",
            "content": "Baby Emperor 100 grams\nProvides 13 kcal of energy.\nCalcium 105 mg\nVitamin A 4,468 IU\nVitamin B1 0.04 mg\nVitamin B2 0.07 mg\nVitamin B3 0.5 mg\nVitamin B6 0.19 mg\nVitamin C 45 mg\nVitamin K 45.5 mg\n19 mg manganese\nIron 0.8 mg\nPhosphorus 37 mg\nFolate 66 mcg\n252 mg of potassium.",
            "benefit": "1. Build strong bones\n2. Stimulate the circulatory system\n3. Helps to recover faster.\n4. Prevent chronic disease\n5. Eye Care\n6. Nourish the heart and blood vessels.\n7. It helps to strengthen the immune system.\n8. Nourish the skin\n9. Lower blood pressure",
            "recommendMenu": "Cantonese Hong Teh Stir-fried Pork and Shrimp, Wonton Soup, Fried Shrimp with Baby Emperor",
            "codeLng": "en",
            "productUniqId": "PD001",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_4",
            "productName": "Golden Muchroom",
            "content": "Golden needle mushroom 100 grams\n88.34 g of water\nEnergy 37 kcal\n2.66 g protein\n0.29 g fat\n7.81 g of carbohydrates\nFiber 2.7 g\n0.22 g sugar\nIron 1.15 mg\nMagnesium 16 mg\nPhosphorus 105 mg\n359 mg potassium\n3 mg sodium\n0.65 mg zinc\nThiamin 0.225 mg\nRiboflavin 0.200 mg.\nNiacin 7.032 mg\nVitamin B6 0.100 mg\nFolate 48 mcg\nVitamin D 5 units",
            "benefit": "1. Helps to trap excess fat in the blood. Thus helping you lose weight And also prevent obesity as well\n2. Make the digestive system better\n3. Nourish the skin to be soft and healthy.\n4. It reduces cholesterol in the body.\n5. Treatment of chronic liver, stomach and intestinal diseases.\n6. Contains a substance frame Mulin (Flammulin) that can inhibit the growth of cancer cells.\n7. Strengthen the immune system in the body.\n8. Helps control blood sugar levels. Therefore suitable for diabetics\n9. Nourish the brain to strengthen memory better.\n10. Stimulate the work of the metabolic system in the body. Helps the body to absorb nutrients better",
            "recommendMenu": "Enoki mushroom omelette, Golden needle mushroom, Stir-fried golden needle mushroom with bacon",
            "codeLng": "en",
            "productUniqId": "PD002",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_4",
            "productName": "Eryngii Mushroom",
            "content": "Orinji Mushroom 100g\n24 calories\n3.6 g protein\n- 7.4 g of carbohydrates\n- Fiber 4.3 grams\n- Linoleic fat 170 mg\n- Calcium 1 mg\n- Iron 0.3 mg\n- Magnesium 15 mg\n- Phosphorus 120 mg\n- Potassium 460 mg\n- 2 mg sodium\n- Vitamin D 1.8 μg\n- Niacin 8.1 mg\n- Folate 80 micrograms\n- Pantothenic acid 1.61 mg\n- Vitamin B2 0.28 mg\n- 0.15 mg of zinc\n- Selenium 3 micrograms",
            "benefit": "1. Helps fight cancer Due to the antioxidant properties of Oringhi mushroom\n2. Helps reduce pain in various parts of the body.\n3. Helps to lower blood sugar Suitable for people with diabetes And those who want to lose weight\n4. Help balance the body. Make all parts Work better\n5. Helps reduce high blood pressure. Adjust the pressure to the normal level.\n6. It has the same nutritional value as meat. Can be eaten along with salad vegetables Or can cook with mushrooms instead of meat\n7. It reduces cholesterol in the body. Is suitable for people who love health And want to lose weight again\n8. Nourish the blood Anyone who suffers from anemia. Eating orinji mushrooms regularly will definitely help.",
            "recommendMenu": "Eringi Mushroom Stir Fried with Chili Paste, Stir Fried Eringi with Scrambled Eggs, Tom Yum Crispy Squid, Orinji Mushroom",
            "codeLng": "en",
            "productUniqId": "PD003",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_4",
            "productName": "Champignon Muchroom",
            "content": "Champignon Mushroom, cooked, quantity 100 g\n16 calories at locale\n1.5 g of carbohydrate\n0.5 g fat\n1.5 g protein\n0.5 g sugar\nPreciousness 1.1 Milligram\n100 mg of potassium\n380 ml sodium",
            "benefit": "1. Helps prevent and resist various cancers. Especially breast cancer in women\n2. Helps the body to create a good immune system.\n3. Excellent help to reduce cholesterol and blood fat levels.\n4. Helps to expel or flush toxins that accumulate in the body.\n5. Helps keep the body strong and energetic\n6. Helps to make the digestive system work well without binding the stomach.\n7. Helps the blood system within the body to circulate better.",
            "recommendMenu": "Tofu with Mushroom Sauce, Mushroom Cream Soup with Champignon Mushrooms, Baked Mushrooms with Butter",
            "codeLng": "en",
            "productUniqId": "PD004",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_4",
            "productName": "White Beech Mushroom",
            "content": "White Shimeji Mushroom 100g\nTotal energy 36 kcal\n3 grams protein\n6 g carbohydrates\n0 g fat",
            "benefit": "1. Helps prevent cancer very well. And helps stop cancer cells from growing\n2. Helps reduce the sugar level and the amount of fat that clogs the blood vessels.\n3. Helps our liver not have to work very hard.\n4. Helps clear and detoxify residues in the liver.\n5. Help in terms of weight control well. Because there is no fat that makes it fat And contains very low amounts of sodium Causing no swelling\n6. Contains free radicals that help keep the body healthy, not getting sick often.\n7. Helps prevent anemia.",
            "recommendMenu": "Shimeji mushroom sauteed with shoyu sauce, stir-fried shimeji mushrooms with shrimp paste, pasta with shimeji",
            "codeLng": "en",
            "productUniqId": "PD005",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_2",
            "productName": "Bacon",
            "content": "Quantity per 100 g\nCalories (kcal) 540\nTotal fat 42 g\n14 g saturated fat\nPolyunsaturated Fat 4.5 g\nUnsaturated fatty acids have 19 g single double bonds.\nTrans fat 0 g\n110 mg cholesterol\n1,717 mg sodium\n565 mg potassium\nCarbohydrates 1.4 g\nDietary fiber 0 g\nSugar 0 g\n37 g protein\nVitamin A 37 IU Vitamin C 0 mg\n11 mg calcium, 1.4 mg iron\nVitamin D 42 IU, Vitamin B6 0.3 mg.\nVitamin B12 1.2 μg, magnesium 33 mg.",
            "benefit": "Bacon… is rich in vitamins B1, B3 and B12, as well as zinc to help nourish the skin, hair and eyes.\nBacon ... contains \"niacin\" or vitamin B3 that helps people live longer.\nBacon… is an amino acid from protein that helps cure hangover symptoms.\nBacon… contains a coenzyme Q1 to help burn fat. When working with exercise\nBacon… contains 45% of the fat, a healthy polyunsaturated fat.",
            "recommendMenu": "-",
            "codeLng": "en",
            "productUniqId": "PD006",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_2",
            "productName": "Spare Rib",
            "content": "Quantity per 100 g\nCalories (kcal) 277\nTotal fat 23 g\n8 g saturated fat\nPolyunsaturated Fat 4 g\nUnsaturated fatty acids have a single double bond of 9 g.\nTrans fat 0.2 g\n80 mg cholesterol\n81 mg sodium\n242 mg of potassium\nCarbohydrates 0 g\nDietary fiber 0 g\nSugar 0 g\nProtein 15 g\nVitamin A 0 IU Vitamin C 0 mg\n15 mg calcium, 0.9 mg iron.\nVitamin D 91 IU, Vitamin B6 0.6 mg.\nVitamin B12 0.4 μg Magnesium 16 mg",
            "benefit": "Benefits of protein to strengthen the body, build bones And makes the bones stronger",
            "recommendMenu": "-",
            "codeLng": "en",
            "productUniqId": "PD007",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_2",
            "productName": "Back Ribs",
            "content": "100 g has total energy 397 kcal, 29.1 g protein, 0 g carb, 30.3 g fat",
            "benefit": "Calcium is a precursor to bone and teeth growth.",
            "recommendMenu": "-",
            "codeLng": "en",
            "productUniqId": "PD008",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_3",
            "productName": "Japanese Green Melon",
            "content": "The nutrition information for 1 cup melon contains 177 grams is as follows:\n\nEnergy 64 calories, 16 g carbohydrates, 1.4 g fiber, 1 g protein, 0 g fat, vitamin C 5, accounting for 3% of the recommended daily intake, vitamin B6, 8% of the recommended intake. Folate is 8% of the recommended daily nutrient, vitamin K is 6% of the recommended daily nutrient, potassium is 12% of the recommended daily nutrient, magnesium. It accounts for 4% of the recommended daily nutrient intake.",
            "benefit": "Reduce high blood pressure, strengthen the immune system, help the digestive system work more efficiently, fight free radicals.",
            "recommendMenu": "-",
            "codeLng": "en",
            "productUniqId": "PD009",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            "catagoryId": "CatID_3",
            "productName": "Japanese Orange Melon",
            "content": "Nutritional information of melons per 100 grams\nEnergy 34 kcal\n8.16 g of carbohydrates\n7.86 g sugar\n0.9 g fiber\n0.19 g fat\n0.84 g protein\nVitamin A 169 μg 21%\nBeta carotene 2,020 μg 19%\nLutein and Zeaxanthin 26 mcg\nVitamin B1 0.041 mg 4%\nVitamin B2 0.019 mg 2%\nVitamin B3 0.734 mg 5%\nVitamin B5 0.105 mg 2%\nVitamin B6 0.072 mg 6%\nVitamin B9 21 μg 5%\nCholine 7.6 mg 2%\nVitamin C 36.7 mg 44%\nVitamin K 2.5 μg 2%\nCalcium 9 mg 1%\nIron 0.21 mg 2%\nMagnesium 12 mg 3%\nManganese 0.41 mg 20%\nPhosphorus 15 mg 2%\nPotassium 267 mg 6%\nSodium 16 mg 1%\nZinc 0.18 mg 2%",
            "benefit": "Reduce high blood pressure, strengthen the immune system, help the digestive system work more efficiently, fight free radicals.",
            "recommendMenu": "-",
            "codeLng": "en",
            "productUniqId": "PD010",
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductDetails', null, {});
  }
};
