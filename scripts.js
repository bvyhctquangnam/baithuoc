// ==================== TỔNG HỢP DỮ LIỆU ĐẦY ĐỦ 36 BỆNH (TẬP I & II) ====================
const diseasesData = [
    // -------------------- TẬP I (1-20) --------------------
    {
        id: 1, name: "Đau cột sống thắt lưng", nameYHCT: "Yêu thống",
        remedies: [
            { id: 101, name: "Can khương thương truật thang", pattern: "Thể Hàn thấp", ingredients: [{name:"Can khương", weight:"08g"}, {name:"Thương truật", weight:"08g"}, {name:"Cam thảo", weight:"06g"}, {name:"Xuyên khung", weight:"16g"}, {name:"Quế chi", weight:"08g"}, {name:"Ý dĩ", weight:"08g"}, {name:"Bạch linh", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 102, name: "Tứ diệu tán", pattern: "Thể Thấp nhiệt", ingredients: [{name:"Thương truật", weight:"08g"}, {name:"Hoàng bá", weight:"15g"}, {name:"Ngưu tất", weight:"15g"}, {name:"Ý dĩ", weight:"20g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 103, name: "Thân thống trục ứ thang", pattern: "Thể Huyết ứ", ingredients: [{name:"Đương qui", weight:"12g"}, {name:"Đào nhân", weight:"06g"}, {name:"Hồng hoa", weight:"06g"}, {name:"Xuyên khung", weight:"12g"}, {name:"Một dược", weight:"08g"}, {name:"Hương phụ", weight:"12g"}, {name:"Tần giao", weight:"12g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Chích thảo", weight:"06g"}, {name:"Khương hoạt", weight:"12g"}, {name:"Địa long", weight:"06g"}, {name:"Ngũ linh chi", weight:"06g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 104, name: "Độc hoạt ký sinh thang", pattern: "Thể Can thận hư", ingredients: [{name:"Đảng sâm", weight:"10g"}, {name:"Phục linh", weight:"15g"}, {name:"Đương qui", weight:"10g"}, {name:"Bạch thược", weight:"15g"}, {name:"Thục địa", weight:"15g"}, {name:"Xuyên khung", weight:"10g"}, {name:"Đỗ trọng", weight:"12g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Quế chi", weight:"06g"}, {name:"Tế tân", weight:"04g"}, {name:"Độc hoạt", weight:"10g"}, {name:"Tang ký sinh", weight:"30g"}, {name:"Phòng phong", weight:"10g"}, {name:"Tần giao", weight:"10g"}, {name:"Cam thảo", weight:"06g"}], usage: "Sắc uống mỗi ngày 01 thang, chia 3 lần." },
            { id: 105, name: "Thận khí hoàn", pattern: "Thể Thận dương hư", ingredients: [{name:"Thục địa", weight:"12g"}, {name:"Hoài sơn", weight:"12g"}, {name:"Sơn thù", weight:"08g"}, {name:"Đan bì", weight:"08g"}, {name:"Trạch tả", weight:"08g"}, {name:"Phục linh", weight:"08g"}, {name:"Nhục quế", weight:"06g"}, {name:"Hắc phụ tử", weight:"06g"}], usage: "Sắc uống mỗi ngày 01 thang, chia 2 lần." }
        ]
    },
    {
        id: 2, name: "Thoái hóa khớp gối", nameYHCT: "Hạc tất phong",
        remedies: [
            { id: 201, name: "Ý dĩ nhân thang", pattern: "Phong hàn thấp tý (Thấp thắng)", ingredients: [{name:"Ý dĩ", weight:"30g"}, {name:"Bạch truật", weight:"08g"}, {name:"Bạch thược", weight:"08g"}, {name:"Đương qui", weight:"12g"}, {name:"Quế chi", weight:"10g"}, {name:"Ma hoàng", weight:"06g"}, {name:"Cam thảo", weight:"04g"}, {name:"Sinh khương", weight:"06g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần khi thuốc còn ấm." },
            { id: 202, name: "Ô đầu thang", pattern: "Phong hàn thấp tý (Hàn thắng)", ingredients: [{name:"Hắc phụ tử", weight:"08g"}, {name:"Ma hoàng", weight:"08g"}, {name:"Bạch thược", weight:"12g"}, {name:"Hoàng kỳ", weight:"20g"}, {name:"Cam thảo", weight:"04g"}, {name:"Mật ong", weight:"80g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần uống ấm." },
            { id: 203, name: "Độc hoạt ký sinh thang", pattern: "Phong hàn thấp tý kèm can thận hư", ingredients: [{name:"Độc hoạt", weight:"10g"}, {name:"Tang ký sinh", weight:"16g"}, {name:"Phòng phong", weight:"12g"}, {name:"Tần giao", weight:"12g"}, {name:"Đương qui", weight:"12g"}, {name:"Quế tâm", weight:"04g"}, {name:"Tế tân", weight:"06g"}, {name:"Phục linh", weight:"12g"}, {name:"Xuyên khung", weight:"08g"}, {name:"Xích thược", weight:"12g"}, {name:"Cam thảo", weight:"06g"}, {name:"Thục địa", weight:"12g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Đỗ trọng", weight:"12g"}, {name:"Đảng sâm", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 204, name: "Ý dĩ nhân hợp Nhị diệu tán", pattern: "Phong thấp nhiệt kèm can thận hư", ingredients: [{name:"Ý dĩ nhân", weight:"12g"}, {name:"Quế chi", weight:"06g"}, {name:"Cam thảo", weight:"06g"}, {name:"Thược dược", weight:"06g"}, {name:"Ma hoàng", weight:"06g"}, {name:"Hoàng bá", weight:"12g"}, {name:"Bạch truật", weight:"12g"}, {name:"Thương truật", weight:"12g"}, {name:"Đương qui", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." }
        ]
    },
    {
        id: 3, name: "Gout", nameYHCT: "Thống phong",
        remedies: [
            { id: 301, name: "Tuyên tý hợp Tam diệu thang", pattern: "Phong thấp nhiệt (Gout cấp)", ingredients: [{name:"Thương truật", weight:"08g"}, {name:"Ngưu tất", weight:"15g"}, {name:"Hoạt thạch", weight:"30g"}, {name:"Hạnh nhân", weight:"12g"}, {name:"Xích tiểu đậu", weight:"15g"}, {name:"Chi tử", weight:"12g"}, {name:"Hoàng bá", weight:"15g"}, {name:"Tỳ giải", weight:"12g"}, {name:"Ý dĩ", weight:"20g"}, {name:"Hy thiêm thảo", weight:"15g"}, {name:"Liên kiều", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 302, name: "Ý dĩ nhân thang", pattern: "Thể phong hàn thấp", ingredients: [{name:"Ma hoàng", weight:"06g"}, {name:"Bạch truật", weight:"15g"}, {name:"Quế chi", weight:"10g"}, {name:"Cam thảo", weight:"06g"}, {name:"Đương qui", weight:"15g"}, {name:"Ý dĩ nhân", weight:"30g"}, {name:"Bạch thược", weight:"15g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 303, name: "Đào nhân ẩm hợp Nhị trần thang", pattern: "Thể đàm ứ trở trệ", ingredients: [{name:"Đào nhân", weight:"10g"}, {name:"Hồng hoa", weight:"10g"}, {name:"Đương qui", weight:"15g"}, {name:"Xuyên khung", weight:"10g"}, {name:"Phục linh", weight:"10g"}, {name:"Trần bì", weight:"08g"}, {name:"Cam thảo", weight:"06g"}, {name:"Uy linh tiên", weight:"10g"}, {name:"Bán hạ chế", weight:"08g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 304, name: "Độc hoạt ký sinh thang", pattern: "Thể can thận lưỡng hư", ingredients: [{name:"Đảng sâm", weight:"10g"}, {name:"Đương qui", weight:"10g"}, {name:"Thục địa", weight:"15g"}, {name:"Đỗ trọng", weight:"15g"}, {name:"Quế chi", weight:"06g"}, {name:"Độc hoạt", weight:"10g"}, {name:"Phòng phong", weight:"10g"}, {name:"Phục linh", weight:"15g"}, {name:"Bạch thược", weight:"15g"}, {name:"Xuyên khung", weight:"10g"}, {name:"Ngưu tất", weight:"15g"}, {name:"Tế tân", weight:"4g"}, {name:"Tang ký sinh", weight:"30g"}, {name:"Tần giao", weight:"10g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." }
        ]
    },
    {
        id: 4, name: "Viêm khớp dạng thấp", nameYHCT: "Chứng tý",
        remedies: [
            { id: 401, name: "Quyên tý thang", pattern: "Thể phong thấp", ingredients: [{name:"Tang chi", weight:"30g"}, {name:"Tần giao", weight:"12g"}, {name:"Độc hoạt", weight:"08g"}, {name:"Khương hoạt", weight:"08g"}, {name:"Đương quy", weight:"12g"}, {name:"Hải phong đằng", weight:"30g"}, {name:"Mộc hương", weight:"06g"}, {name:"Quế chi", weight:"08g"}, {name:"Xuyên khung", weight:"12g"}, {name:"Nhũ hương", weight:"06g"}, {name:"Chích cam thảo", weight:"06g"}], usage: "Sắc uống ngày 01 thang chia 2 lần." },
            { id: 402, name: "Can khương thương truật thang", pattern: "Thể hàn thấp", ingredients: [{name:"Can khương", weight:"08g"}, {name:"Quế chi", weight:"08g"}, {name:"Thương truật", weight:"08g"}, {name:"Ý dĩ", weight:"08g"}, {name:"Cam thảo", weight:"06g"}, {name:"Bạch linh", weight:"12g"}, {name:"Xuyên khung", weight:"16g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 403, name: "Bạch hổ quế chi thang", pattern: "Thể phong thấp nhiệt", ingredients: [{name:"Thạch cao sống", weight:"30g"}, {name:"Tri mẫu", weight:"12g"}, {name:"Ngạnh mễ", weight:"12g"}, {name:"Quế chi", weight:"06g"}, {name:"Cam thảo", weight:"04g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần, uống 5-7 thang." },
            { id: 404, name: "Độc hoạt ký sinh thang", pattern: "Thể Can thận hư", ingredients: [{name:"Độc hoạt", weight:"10g"}, {name:"Tang ký sinh", weight:"12g"}, {name:"Tần giao", weight:"12g"}, {name:"Phục linh", weight:"12g"}, {name:"Bạch thược", weight:"12g"}, {name:"Thục địa", weight:"12g"}, {name:"Đỗ trọng", weight:"12g"}, {name:"Đảng sâm", weight:"12g"}, {name:"Phòng phong", weight:"12g"}, {name:"Tế tân", weight:"4g"}, {name:"Đương qui", weight:"12g"}, {name:"Quế chi", weight:"4g"}, {name:"Xuyên khung", weight:"8g"}, {name:"Ngưu tất", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 3 lần." }
        ]
    },
    {
        id: 5, name: "Cổ vai cánh tay", nameYHCT: "Chứng tý",
        remedies: [
            { id: 501, name: "Quế chi gia Cát căn thang", pattern: "Thể Phong hàn", ingredients: [{name:"Quế chi", weight:"08g"}, {name:"Thược dược", weight:"12g"}, {name:"Đại táo", weight:"12g"}, {name:"Sinh khương", weight:"08g"}, {name:"Cam thảo", weight:"04g"}, {name:"Cát cǎn", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần, uống ấm." },
            { id: 502, name: "Bạch hổ gia quế chi thang", pattern: "Thể phong thấp nhiệt tý", ingredients: [{name:"Thạch cao", weight:"40g"}, {name:"Cam thảo", weight:"04g"}, {name:"Tri mẫu", weight:"12g"}, {name:"Quế chi", weight:"08g"}, {name:"Ngạnh mễ", weight:"20g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 503, name: "Đào hồng ẩm", pattern: "Thể huyết ứ", ingredients: [{name:"Đào nhân", weight:"08g"}, {name:"Xuyên khung", weight:"08g"}, {name:"Đương qui", weight:"10g"}, {name:"Uy linh tiên", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 504, name: "Quyên tý thang", pattern: "Thể can thận hư", ingredients: [{name:"Khương hoạt", weight:"09g"}, {name:"Phòng phong", weight:"08g"}, {name:"Xích thược", weight:"08g"}, {name:"Đương qui", weight:"12g"}, {name:"Sinh hoàng kỳ", weight:"12g"}, {name:"Tang chi", weight:"12g"}, {name:"Khương hoàng", weight:"10g"}, {name:"Cam thảo", weight:"04g"}, {name:"Đại táo", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." }
        ]
    },
    {
        id: 6, name: "Tăng huyết áp vô căn (T1)", nameYHCT: "Huyễn vựng",
        remedies: [
            { id: 601, name: "Thiên ma câu đằng ẩm", pattern: "Can dương thượng cang", ingredients: [{name:"Thiên ma", weight:"08g"}, {name:"Câu đằng", weight:"12g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Thạch quyết minh", weight:"20g"}, {name:"Đỗ trọng", weight:"12g"}, {name:"Tang ký sinh", weight:"16g"}, {name:"Chi tử", weight:"12g"}, {name:"Hoàng cầm", weight:"12g"}, {name:"Ích mẫu", weight:"12g"}, {name:"Dạ giao đằng", weight:"12g"}, {name:"Phục thần", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 602, name: "Lục vị địa hoàng thang", pattern: "Can thận âm hư", ingredients: [{name:"Thục địa", weight:"16g"}, {name:"Sơn thù", weight:"12g"}, {name:"Hoài sơn", weight:"12g"}, {name:"Bạch linh", weight:"12g"}, {name:"Đan bì", weight:"08g"}, {name:"Trạch tả", weight:"08g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 603, name: "Hữu quy hoàn", pattern: "Thể âm dương lưỡng hư", ingredients: [{name:"Thục địa", weight:"16g"}, {name:"Sơn thù", weight:"12g"}, {name:"Hoài sơn", weight:"12g"}, {name:"Kỷ tử", weight:"12g"}, {name:"Thỏ ty tử", weight:"12g"}, {name:"Hắc phụ tử", weight:"04g"}, {name:"Đương qui", weight:"12g"}, {name:"Nhục quế", weight:"04g"}, {name:"Đỗ trọng", weight:"12g"}, {name:"Lộc giác giao", weight:"16g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 604, name: "Bán hạ bạch truật thiên ma thang", pattern: "Thể đàm thấp", ingredients: [{name:"Bán hạ chế", weight:"12g"}, {name:"Bạch truật", weight:"16g"}, {name:"Thiên ma", weight:"12g"}, {name:"Cam thảo", weight:"04g"}, {name:"Trần bì", weight:"08g"}, {name:"Bạch linh", weight:"16g"}, {name:"Sinh khương", weight:"1 lát"}, {name:"Đại táo", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." }
        ]
    },
    {
        id: 7, name: "Rối loạn chuyển hóa lipoprotein", nameYHCT: "Chứng đàm",
        remedies: [
            { id: 701, name: "Bán hạ bạch truật thiên ma thang", pattern: "Tỳ hư đàm thấp", ingredients: [{name:"Bán hạ chế", weight:"12g"}, {name:"Bạch truật", weight:"16g"}, {name:"Thiên ma", weight:"12g"}, {name:"Cam thảo", weight:"06g"}, {name:"Trần bì", weight:"08g"}, {name:"Bạch linh", weight:"16g"}], usage: "Sắc uống mỗi ngày 01 thang, chia 2 lần." },
            { id: 702, name: "Kỷ cúc địa hoàng thang", pattern: "Thể can thận âm hư", ingredients: [{name:"Thục địa", weight:"16g"}, {name:"Sơn thù", weight:"12g"}, {name:"Đan bì", weight:"08g"}, {name:"Kỷ tử", weight:"12g"}, {name:"Hoài sơn", weight:"12g"}, {name:"Trạch tả", weight:"12g"}, {name:"Phục linh", weight:"08g"}, {name:"Cúc hoa", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 703, name: "Tiêu dao tán", pattern: "Thể can uất tỳ hư", ingredients: [{name:"Sài hồ", weight:"12g"}, {name:"Đương quy", weight:"12g"}, {name:"Bạch thược", weight:"12g"}, {name:"Phục linh", weight:"12g"}, {name:"Bạch truật", weight:"12g"}, {name:"Cam thảo", weight:"06g"}, {name:"Bạc hà", weight:"06g"}, {name:"Sinh khương", weight:"04g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 704, name: "Hữu quy hoàn", pattern: "Thể tỳ thận dương hư", ingredients: [{name:"Thục địa", weight:"32g"}, {name:"Hoài sơn", weight:"160g"}, {name:"Sơn thù", weight:"160g"}, {name:"Phụ tử chế", weight:"80g"}, {name:"Nhục quế", weight:"120g"}, {name:"Đỗ trọng", weight:"160g"}], usage: "Tán bột mịn làm hoàn hoặc sắc uống." },
            { id: 705, name: "Tứ linh tán hợp Lục nhất tán", pattern: "Thể thấp nhiệt nội kết", ingredients: [{name:"Bạch linh", weight:"15g"}, {name:"Bạch truật", weight:"15g"}, {name:"Hoạt thạch", weight:"25g"}, {name:"Trư linh", weight:"15g"}, {name:"Trạch tả", weight:"15g"}, {name:"Cam thảo", weight:"04g"}], usage: "Tán bột mịn, uống 12g-18g/lần x 2 lần/ngày." },
            { id: 706, name: "Huyết phủ trục ứ thang", pattern: "Thể khí trệ huyết ứ", ingredients: [{name:"Đương quy", weight:"12g"}, {name:"Sinh địa", weight:"12g"}, {name:"Đào nhân", weight:"16g"}, {name:"Hồng hoa", weight:"12g"}, {name:"Xuyên khung", weight:"06g"}, {name:"Chỉ xác", weight:"08g"}, {name:"Ngưu tất", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." }
        ]
    },
    {
        id: 8, name: "Bệnh dây thần kinh mặt", nameYHCT: "Khẩu nhãn oa tà",
        remedies: [
            { id: 801, name: "Đại tần giao thang", pattern: "Thể phong hàn kinh lạc", ingredients: [{name:"Khương hoạt", weight:"08g"}, {name:"Độc hoạt", weight:"08g"}, {name:"Tần giao", weight:"08g"}, {name:"Bạch chỉ", weight:"08g"}, {name:"Cam thảo", weight:"06g"}, {name:"Bạch truật", weight:"12g"}, {name:"Đương qui", weight:"08g"}, {name:"Bạch thược", weight:"08g"}, {name:"Xuyên khung", weight:"08g"}, {name:"Đảng sâm", weight:"12g"}, {name:"Bạch linh", weight:"08g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Thục địa", weight:"12g"}, {name:"Hoàng cầm", weight:"08g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 802, name: "Nghiệm phương phong nhiệt", pattern: "Thể phong nhiệt", ingredients: [{name:"Kim ngân hoa", weight:"16g"}, {name:"Bồ công anh", weight:"16g"}, {name:"Thổ phục linh", weight:"12g"}, {name:"Ké đầu ngựa", weight:"12g"}, {name:"Xuyên khung", weight:"12g"}, {name:"Đan sâm", weight:"12g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Trần bì", weight:"08g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 803, name: "Tứ vật đào hồng", pattern: "Thể huyết ứ", ingredients: [{name:"Xuyên khung", weight:"12g"}, {name:"Thục địa", weight:"12g"}, {name:"Hồng hoa", weight:"08g"}, {name:"Bạch thược", weight:"12g"}, {name:"Đương qui", weight:"12g"}, {name:"Đào nhân", weight:"10g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." }
        ]
    },
    {
        id: 9, name: "Đau dây thần kinh liên sườn", nameYHCT: "Hiếp thống",
        remedies: [
            { id: 901, name: "Can khương thương truật thang", pattern: "Thể phong hàn", ingredients: [{name:"Can khương", weight:"08g"}, {name:"Thương truật", weight:"08g"}, {name:"Cam thảo", weight:"06g"}, {name:"Xuyên khung", weight:"16g"}, {name:"Quế chi", weight:"08g"}, {name:"Ý dĩ", weight:"08g"}, {name:"Bạch linh", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 902, name: "Sài hồ sơ can tán", pattern: "Can khí uất kết", ingredients: [{name:"Sài hồ", weight:"10g"}, {name:"Chỉ xác", weight:"12g"}, {name:"Bạch thược", weight:"15g"}, {name:"Cam thảo", weight:"06g"}, {name:"Hương phụ", weight:"15g"}, {name:"Xuyên khung", weight:"12g"}, {name:"Trần bì", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 903, name: "Đan chi tiêu dao", pattern: "Thể can uất hóa hỏa", ingredients: [{name:"Đan bì", weight:"12g"}, {name:"Chi tử", weight:"12g"}, {name:"Sài hồ", weight:"10g"}, {name:"Bạch thược", weight:"12g"}, {name:"Đương quy", weight:"12g"}, {name:"Phục linh", weight:"12g"}, {name:"Bạch truật", weight:"12g"}, {name:"Bạc hà", weight:"04g"}, {name:"Sinh khương", weight:"04g"}, {name:"Cam thảo", weight:"06g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 904, name: "Tiểu sài hồ thang", pattern: "Tà uất thiếu dương", ingredients: [{name:"Sài hồ", weight:"10g"}, {name:"Đảng sâm", weight:"15g"}, {name:"Sinh khương", weight:"06g"}, {name:"Cam thảo", weight:"06g"}, {name:"Bán hạ chế", weight:"12g"}, {name:"Hoàng cầm", weight:"12g"}, {name:"Đại táo", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 905, name: "Huyết phủ trục ứ thang", pattern: "Thể huyết ứ", ingredients: [{name:"Đương quy", weight:"12g"}, {name:"Đào nhân", weight:"06g"}, {name:"Sài hồ", weight:"10g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Cát cánh", weight:"06g"}, {name:"Cam thảo", weight:"06g"}, {name:"Sinh địa", weight:"12g"}, {name:"Hồng hoa", weight:"06g"}, {name:"Xuyên khung", weight:"12g"}, {name:"Xích thược", weight:"10g"}, {name:"Chỉ xác", weight:"08g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 906, name: "Long đởm tả can thang", pattern: "Can đởm thấp nhiệt", ingredients: [{name:"Long đởm thảo", weight:"15g"}, {name:"Hoàng cầm", weight:"12g"}, {name:"Sinh địa", weight:"12g"}, {name:"Trạch tả", weight:"15g"}, {name:"Mộc thông", weight:"12g"}, {name:"Chi tử", weight:"12g"}, {name:"Sài hồ", weight:"10g"}, {name:"Xa tiền tử", weight:"15g"}, {name:"Đương qui", weight:"12g"}, {name:"Cam thảo", weight:"05g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." }
        ]
    },
    {
        id: 10, name: "Đau thần kinh tọa", nameYHCT: "Yêu cước thống",
        remedies: [
            { id: 1001, name: "Can khương thương truật linh phụ thang", pattern: "Thể phong hàn thấp", ingredients: [{name:"Can khương", weight:"08g"}, {name:"Quế chi", weight:"08g"}, {name:"Bạch linh", weight:"12g"}, {name:"Ý dĩ", weight:"08g"}, {name:"Cam thảo", weight:"06g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 1002, name: "Độc hoạt tang ký sinh thang", pattern: "Thể phong hàn thấp kèm can thận hư", ingredients: [{name:"Độc hoạt", weight:"10g"}, {name:"Tang ký sinh", weight:"12g"}, {name:"Tần giao", weight:"12g"}, {name:"Phục linh", weight:"12g"}, {name:"Bạch thược", weight:"12g"}, {name:"Thục địa", weight:"12g"}, {name:"Đỗ trọng", weight:"12g"}, {name:"Đảng sâm", weight:"12g"}, {name:"Phòng phong", weight:"12g"}, {name:"Tế tân", weight:"4g"}, {name:"Đương quy", weight:"12g"}, {name:"Quế chi", weight:"4g"}, {name:"Xuyên khung", weight:"8g"}, {name:"Chích cam thảo", weight:"6g"}, {name:"Ngưu tất", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 3 lần." },
            { id: 1003, name: "Ý dĩ nhân hợp Nhị diệu tán", pattern: "Thể thấp nhiệt", ingredients: [{name:"Ý dĩ nhân", weight:"12g"}, {name:"Quế chi", weight:"06g"}, {name:"Cam thảo", weight:"06g"}, {name:"Thược dược", weight:"06g"}, {name:"Ma hoàng", weight:"06g"}, {name:"Hoàng bá", weight:"12g"}, {name:"Bạch truật", weight:"12g"}, {name:"Thương truật", weight:"12g"}, {name:"Đương quy", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 1004, name: "Thân thống trục ứ thang", pattern: "Thể huyết ứ", ingredients: [{name:"Đương quy", weight:"12g"}, {name:"Hồng hoa", weight:"06g"}, {name:"Chích thảo", weight:"04g"}, {name:"Khương hoạt", weight:"12g"}, {name:"Đào nhân", weight:"06g"}, {name:"Nhũ hương", weight:"08g"}, {name:"Hương phụ chế", weight:"12g"}, {name:"Tần giao", weight:"12g"}, {name:"Địa long", weight:"06g"}, {name:"Ngũ linh chi", weight:"12g"}, {name:"Ngưu tất", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." }
        ]
    },
    {
        id: 11, name: "Nhồi máu não (T1)", nameYHCT: "Bán thân bất toại",
        remedies: [
            { id: 1101, name: "Lục vị địa hoàng hoàn", pattern: "Thể can thận âm hư", ingredients: [{name:"Thục địa", weight:"12g"}, {name:"Trạch tả", weight:"08g"}, {name:"Hoài sơn", weight:"12g"}, {name:"Phục linh", weight:"08g"}, {name:"Sơn thù", weight:"12g"}, {name:"Mẫu lệ", weight:"10g"}, {name:"Đan bì", weight:"08g"}, {name:"Miết giáp", weight:"10g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 1102, name: "Đạo đàm thang", pattern: "Thể phong đàm", ingredients: [{name:"Bán hạ chế", weight:"12g"}, {name:"Trần bì", weight:"08g"}, {name:"Phục linh", weight:"12g"}, {name:"Cam thảo", weight:"06g"}, {name:"Đởm nam tinh", weight:"12g"}, {name:"Đảng sâm", weight:"12g"}, {name:"Trúc nhự", weight:"04g"}, {name:"Xương bồ", weight:"12g"}, {name:"Đại táo", weight:"12g"}, {name:"Sinh khương", weight:"3 lát"}], usage: "Sắc uống ngày 1 thang chia 2 lần." },
            { id: 1103, name: "Bổ dương hoàn ngũ thang", pattern: "Thể khí hư huyết ứ", ingredients: [{name:"Quy vĩ", weight:"12g"}, {name:"Sinh hoàng kỳ", weight:"20g"}, {name:"Địa long", weight:"06g"}, {name:"Đào nhân", weight:"08g"}, {name:"Hồng hoa", weight:"08g"}, {name:"Xuyên khung", weight:"10g"}, {name:"Xích thược", weight:"12g"}], usage: "Sắc uống ngày 1 thang chia 2 lần." }
        ]
    },
    {
        id: 12, name: "Bại não trẻ em", nameYHCT: "Ngũ trì",
        remedies: [
            { id: 1201, name: "Lục vị địa hoàng hoàn", pattern: "Thể Can thận bất túc", ingredients: [{name:"Thục địa", weight:"16g"}, {name:"Bạch linh", weight:"08g"}, {name:"Hoài sơn", weight:"08g"}, {name:"Đan bì", weight:"06g"}, {name:"Sơn thù", weight:"08g"}, {name:"Trạch tả", weight:"06g"}], usage: "Luyện mật làm hoàn ngày uống 8-12g." },
            { id: 1202, name: "Điều nguyên tán gia vị", pattern: "Thể tâm tỳ hư", ingredients: [{name:"Phục linh", weight:"08g"}, {name:"Nhân sâm", weight:"06g"}, {name:"Bạch thược", weight:"08g"}, {name:"Bạch truật", weight:"12g"}, {name:"Hoài sơn", weight:"12g"}, {name:"Xuyên khung", weight:"06g"}, {name:"Cam thảo", weight:"06g"}, {name:"Thục địa", weight:"10g"}, {name:"Đương quy", weight:"10g"}, {name:"Hoàng kỳ", weight:"12g"}], usage: "Tán bột uống 4-6g/ngày hoặc sắc uống." },
            { id: 1203, name: "Thông khiếu hoạt huyết hợp Nhị trần", pattern: "Thể đàm ứ trở trệ", ingredients: [{name:"Xích thược", weight:"12g"}, {name:"Xuyên khung", weight:"06g"}, {name:"Đào nhân", weight:"08g"}, {name:"Đan sâm", weight:"10g"}, {name:"Bạch linh", weight:"10g"}, {name:"Hồng hoa", weight:"08g"}, {name:"Bán hạ chế", weight:"08g"}, {name:"Trần bì", weight:"06g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." }
        ]
    },
    {
        id: 13, name: "Di chứng viêm não do virus", nameYHCT: "Ôn bệnh",
        remedies: [
            { id: 1301, name: "Thanh hao miết giáp thang", pattern: "Thể âm hư", ingredients: [{name:"Thanh cao", weight:"08g"}, {name:"Miết giáp", weight:"16g"}, {name:"Sinh địa", weight:"12g"}, {name:"Tri mẫu", weight:"06g"}, {name:"Đan bì", weight:"08g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 1302, name: "Bát trân thang gia giảm", pattern: "Thể khí âm lưỡng hư", ingredients: [{name:"Đảng sâm", weight:"08g"}, {name:"Phục linh", weight:"08g"}, {name:"Đương quy", weight:"12g"}, {name:"Bạch truật", weight:"12g"}, {name:"Hoàng kỳ", weight:"08g"}, {name:"Thục địa", weight:"12g"}, {name:"Bạch thược", weight:"08g"}, {name:"Cam thảo", weight:"04g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." }
        ]
    },
    {
        id: 14, name: "Suy dinh dưỡng", nameYHCT: "Cam tích",
        remedies: [
            { id: 1401, name: "Sâm linh bạch truật tán", pattern: "Thể cam khí (Tỳ hư)", ingredients: [{name:"Đảng sâm", weight:"12g"}, {name:"Bạch linh", weight:"08g"}, {name:"Bạch truật", weight:"12g"}, {name:"Hoài sơn", weight:"12g"}, {name:"Liên nhục", weight:"12g"}, {name:"Bạch biển đậu", weight:"08g"}, {name:"Sa nhân", weight:"04g"}, {name:"Cam thảo", weight:"04g"}, {name:"Cát cánh", weight:"04g"}, {name:"Trần bì", weight:"04g"}, {name:"Ý dĩ", weight:"08g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 1402, name: "Phì nhi hoàn gia giảm", pattern: "Thể cam tích (Tỳ hư tích trệ)", ingredients: [{name:"Hoàng liên", weight:"40g"}, {name:"Binh lang", weight:"32g"}, {name:"Mạch nha", weight:"20g"}, {name:"Mộc hương", weight:"20g"}, {name:"Thần khúc", weight:"40g"}, {name:"Sử quân tử", weight:"20g"}, {name:"Đảng sâm", weight:"40g"}, {name:"Cam thảo", weight:"20g"}, {name:"Bạch linh", weight:"32g"}, {name:"Bạch truật", weight:"32g"}, {name:"Sơn tra", weight:"16g"}], usage: "Tán mịn làm hoàn mật lợn, uống 3g/lần." },
            { id: 1403, name: "Bát trân thang gia giảm", pattern: "Thể can cam (Khí huyết hư)", ingredients: [{name:"Đảng sâm", weight:"16g"}, {name:"Phục linh", weight:"08g"}, {name:"Đương quy", weight:"08g"}, {name:"Bạch truật", weight:"12g"}, {name:"Xuyên khung", weight:"06g"}, {name:"Hoàng kỳ", weight:"16g"}, {name:"Cam thảo", weight:"06g"}, {name:"Bạch thược", weight:"08g"}, {name:"Thục địa", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." }
        ]
    },
    {
        id: 15, name: "Viêm dạ dày và tá tràng (T1)", nameYHCT: "Vị quản thống",
        remedies: [
            { id: 1501, name: "Sài hồ sơ can thang", pattern: "Can khí phạm vị (Khí trệ)", ingredients: [{name:"Sài hồ", weight:"12g"}, {name:"Xuyên khung", weight:"08g"}, {name:"Chỉ xác", weight:"08g"}, {name:"Hương phụ", weight:"08g"}, {name:"Bạch thược", weight:"12g"}, {name:"Trần bì", weight:"08g"}, {name:"Cam thảo", weight:"06g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 1502, name: "Hóa can tiễn hợp Tả kim hoàn", pattern: "Can khí phạm vị (Hỏa uất)", ingredients: [{name:"Thanh bì", weight:"08g"}, {name:"Trần bì", weight:"06g"}, {name:"Bạch thược", weight:"12g"}, {name:"Đan bì", weight:"08g"}, {name:"Chi tử", weight:"08g"}, {name:"Trạch tả", weight:"08g"}, {name:"Thổ bối mẫu", weight:"06g"}, {name:"Hoàng liên", weight:"08g"}, {name:"Ngô thù du", weight:"02g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 1503, name: "Thất tiếu tán", pattern: "Thể huyết ứ (Thực chứng)", ingredients: [{name:"Ngũ linh chi", weight:"10g"}, {name:"Bồ hoàng", weight:"10g"}], usage: "Tán bột mỗi ngày uống 10g chia 2 lần." },
            { id: 1504, name: "Hoàng kỳ kiến trung thang", pattern: "Thể tỳ vị hư hàn", ingredients: [{name:"Hoàng kỳ", weight:"16g"}, {name:"Quế chi", weight:"08g"}, {name:"Sinh khương", weight:"06g"}, {name:"Bạch thược", weight:"08g"}, {name:"Chích cam thảo", weight:"06g"}, {name:"Đại táo", weight:"12g"}, {name:"Hương phụ", weight:"08g"}, {name:"Mạch nha", weight:"30g"}], usage: "Sắc uống ngày 1 thang (Mạch nha hòa tan uống sau)." }
        ]
    },
    {
        id: 16, name: "Viêm gan virus mạn", nameYHCT: "Hiếp thống",
        remedies: [
            { id: 1601, name: "Sài hồ sơ can thang", pattern: "Thể khí ngưng", ingredients: [{name:"Sài hồ", weight:"12g"}, {name:"Cam thảo", weight:"06g"}, {name:"Bạch thược", weight:"16g"}, {name:"Xuyên khung", weight:"08g"}, {name:"Chỉ xác", weight:"12g"}, {name:"Hương phụ", weight:"12g"}, {name:"Trần bì", weight:"06g"}], usage: "Sắc ngày 1 thang, chia 2 lần." },
            { id: 1602, name: "Huyết phủ trục ứ thang", pattern: "Thể huyết ứ", ingredients: [{name:"Đương qui", weight:"16g"}, {name:"Hồng hoa", weight:"08g"}, {name:"Sài hồ", weight:"10g"}, {name:"Sinh địa", weight:"12g"}, {name:"Chỉ xác", weight:"10g"}, {name:"Cam thảo", weight:"06g"}, {name:"Đào nhân", weight:"08g"}, {name:"Xích thược", weight:"12g"}, {name:"Cát cánh", weight:"10g"}, {name:"Xuyên khung", weight:"08g"}, {name:"Ngưu tất", weight:"12g"}], usage: "Sắc ngày 1 thang, chia 2 lần." },
            { id: 1603, name: "Nhân trần ngũ linh tán", pattern: "Thể can đởm thấp nhiệt", ingredients: [{name:"Nhân trần", weight:"16g"}, {name:"Bạch truật", weight:"16g"}, {name:"Phục linh", weight:"16g"}, {name:"Trư linh", weight:"12g"}, {name:"Trạch tả", weight:"12g"}, {name:"Quế chi", weight:"06g"}], usage: "Tất cả làm thang sắc uống ngày 1 thang chia 2 lần." },
            { id: 1604, name: "Nhất quán tiễn", pattern: "Thể âm hư nội nhiệt", ingredients: [{name:"Sa sâm", weight:"16g"}, {name:"Kỷ tử", weight:"12g"}, {name:"Sinh địa", weight:"12g"}, {name:"Đương qui", weight:"12g"}, {name:"Mạch môn", weight:"12g"}, {name:"Xuyên luyện tử", weight:"12g"}], usage: "Sắc ngày 1 thang, chia 2 lần." }
        ]
    },
    {
        id: 17, name: "Bệnh phổi tắc nghẽn mạn tính (COPD)", nameYHCT: "Khái suyễn",
        remedies: [
            { id: 1701, name: "Tang cúc ẩm", pattern: "Thể phong nhiệt (Đợt cấp)", ingredients: [{name:"Tang diệp", weight:"12g"}, {name:"Liên kiều", weight:"16g"}, {name:"Cát cánh", weight:"10g"}, {name:"Lô căn", weight:"08g"}, {name:"Bạc hà", weight:"06g"}, {name:"Cam thảo", weight:"06g"}, {name:"Hạnh nhân", weight:"12g"}, {name:"Cúc hoa", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 1702, name: "Hạnh tô tán", pattern: "Thể phong hàn", ingredients: [{name:"Hạnh nhân", weight:"12g"}, {name:"Tô diệp", weight:"10g"}, {name:"Trần bì", weight:"08g"}, {name:"Chỉ xác", weight:"08g"}, {name:"Tiền hồ", weight:"12g"}, {name:"Cát cánh", weight:"10g"}, {name:"Bán hạ chế", weight:"08g"}, {name:"Phục linh", weight:"16g"}, {name:"Sinh khương", weight:"03 lát"}, {name:"Cam thảo", weight:"04g"}, {name:"Đại táo", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 1703, name: "Tang hạnh thang", pattern: "Thể khí táo", ingredients: [{name:"Tang diệp", weight:"12g"}, {name:"Hạnh nhân", weight:"08g"}, {name:"Chi tử", weight:"08g"}, {name:"Lê bì", weight:"06g"}, {name:"Thổ bối mẫu", weight:"04g"}, {name:"Sa sâm", weight:"08g"}, {name:"Đạm đậu xị", weight:"08g"}], usage: "Sắc ngày 1 thang, chia 2 lần." },
            { id: 1704, name: "Lục quân tử hợp Bình vị tán", pattern: "Thể đàm thấp", ingredients: [{name:"Đảng sâm", weight:"12g"}, {name:"Phục linh", weight:"16g"}, {name:"Trần bì", weight:"08g"}, {name:"Thương truật", weight:"12g"}, {name:"Sinh khương", weight:"06g"}, {name:"Cam thảo", weight:"12g"}, {name:"Bạch truật", weight:"16g"}, {name:"Bán hạ chế", weight:"10g"}, {name:"Hậu phác", weight:"12g"}, {name:"Đại táo", weight:"12g"}], usage: "Sắc ngày 1 thang, chia 2 lần." },
            { id: 1705, name: "Tiểu thanh long thang", pattern: "Thể thủy ẩm (Hàn ẩm)", ingredients: [{name:"Ma hoàng", weight:"06g"}, {name:"Tế tân", weight:"04g"}, {name:"Bán hạ chế", weight:"12g"}, {name:"Bạch thược", weight:"12g"}, {name:"Nhục quế", weight:"08g"}, {name:"Can khương", weight:"06g"}, {name:"Ngũ vị tử", weight:"06g"}, {name:"Cam thảo", weight:"06g"}], usage: "Sắc ngày 1 thang, chia 2 lần." }
        ]
    },
    {
        id: 18, name: "Mày đay", nameYHCT: "Ẩn chẩn",
        remedies: [
            { id: 1801, name: "Quế chi thang", pattern: "Thể phong hàn", ingredients: [{name:"Quế chi", weight:"08g"}, {name:"Bạch thược", weight:"12g"}, {name:"Sinh khương", weight:"12g"}, {name:"Chích cam thảo", weight:"06g"}, {name:"Đại táo", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 1802, name: "Ngân kiều tán", pattern: "Thể phong nhiệt", ingredients: [{name:"Kim ngân hoa", weight:"16g"}, {name:"Liên kiều", weight:"16g"}, {name:"Kinh giới", weight:"12g"}, {name:"Cát cánh", weight:"12g"}, {name:"Ngưu bàng tử", weight:"12g"}, {name:"Bạc hà", weight:"08g"}, {name:"Đạm đậu xị", weight:"12g"}, {name:"Đạm trúc diệp", weight:"12g"}, {name:"Cam thảo", weight:"06g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 1803, name: "Tiêu phong tán", pattern: "Thể huyết hư phong táo", ingredients: [{name:"Kinh giới", weight:"12g"}, {name:"Phòng phong", weight:"12g"}, {name:"Đương qui", weight:"12g"}, {name:"Sinh địa", weight:"12g"}, {name:"Khổ sâm", weight:"12g"}, {name:"Thuyền thoái", weight:"04g"}, {name:"Ngưu bàng tử", weight:"12g"}, {name:"Thạch cao", weight:"12g"}, {name:"Tri mẫu", weight:"10g"}, {name:"Cam thảo", weight:"06g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." }
        ]
    },
    {
        id: 19, name: "Bí đái cơ năng", nameYHCT: "Long bế",
        remedies: [
            { id: 1901, name: "Bát chính tán", pattern: "Thể bàng quang thấp nhiệt", ingredients: [{name:"Mộc thông", weight:"12g"}, {name:"Cù mạch", weight:"12g"}, {name:"Hoạt thạch", weight:"16g"}, {name:"Đại hoàng", weight:"06g"}, {name:"Xa tiền tử", weight:"08g"}, {name:"Biển súc", weight:"10g"}, {name:"Chi tử", weight:"08g"}, {name:"Cam thảo", weight:"06g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 1902, name: "Thanh phế ẩm", pattern: "Thể phế nhiệt", ingredients: [{name:"Sa sâm", weight:"16g"}, {name:"Tang bạch bì", weight:"12g"}, {name:"Bạch mao căn", weight:"12g"}, {name:"Chi tử", weight:"08g"}, {name:"Phục linh", weight:"12g"}, {name:"Hoàng cầm", weight:"12g"}, {name:"Mạch môn", weight:"12g"}, {name:"Lô căn", weight:"12g"}, {name:"Mộc thông", weight:"12g"}, {name:"Xa tiền tử", weight:"08g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 1903, name: "Sài hồ sơ can hợp Trầm hương giải khí", pattern: "Thể khí trệ huyết ứ", ingredients: [{name:"Sài hồ", weight:"12g"}, {name:"Hương phụ", weight:"12g"}, {name:"Hoạt thạch", weight:"10g"}, {name:"Đương quy", weight:"08g"}, {name:"Thanh bì", weight:"08g"}, {name:"Ô dược", weight:"10g"}, {name:"Vương bất lưu hành", weight:"10g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 1904, name: "Tế sinh thận khí hoàn", pattern: "Thể thận khí hư", ingredients: [{name:"Thục địa", weight:"32g"}, {name:"Sơn thù", weight:"16g"}, {name:"Bạch linh", weight:"12g"}, {name:"Hoài sơn", weight:"16g"}, {name:"Trạch tả", weight:"12g"}, {name:"Đơn bì", weight:"12g"}, {name:"Phụ tử chế", weight:"06g"}, {name:"Quế chi", weight:"14g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Xa tiền tử", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." }
        ]
    },
    {
        id: 20, name: "Bệnh trĩ", nameYHCT: "Hạ trĩ",
        remedies: [
            { id: 2001, name: "Hòe hoa tán", pattern: "Thể nhiệt độc", ingredients: [{name:"Hòe hoa sao vàng", weight:"12g"}, {name:"Kinh giới tuệ sao đen", weight:"12g"}, {name:"Trắc bá diệp sao cháy", weight:"12g"}, {name:"Chỉ xác sao", weight:"12g"}], usage: "Tán bột mịn uống 8-10g/lần với nước sôi để nguội hoặc nước cơm." },
            { id: 2002, name: "Hoạt huyết địa hoàng thang", pattern: "Thể huyết ứ (Trĩ tắc mạch)", ingredients: [{name:"Sinh địa", weight:"20g"}, {name:"Hòe hoa", weight:"12g"}, {name:"Kinh giới", weight:"12g"}, {name:"Địa du", weight:"12g"}, {name:"Hoàng cầm", weight:"12g"}, {name:"Xích thược", weight:"12g"}, {name:"Đương quy", weight:"12g"}], usage: "Sắc uống ngày 1 thang chia 2 lần." },
            { id: 2003, name: "Hòe hoa tán thấp nhiệt", pattern: "Thể thấp nhiệt (Trĩ viêm loét)", ingredients: [{name:"Hòe hoa sao vàng", weight:"12g"}, {name:"Kinh giới sao đen", weight:"16g"}, {name:"Trắc bá diệp sao cháy", weight:"12g"}, {name:"Chỉ xác sao", weight:"10g"}], usage: "Tán bột mịn uống 8g/lần." },
            { id: 2004, name: "Bổ trung ích khí thang", pattern: "Thể khí huyết lưỡng hư", ingredients: [{name:"Đảng sâm", weight:"16g"}, {name:"Hoàng kỳ", weight:"12g"}, {name:"Bạch truật", weight:"12g"}, {name:"Cam thảo", weight:"04g"}, {name:"Trần bì", weight:"06g"}, {name:"Đương quy", weight:"10g"}, {name:"Thăng ma", weight:"08g"}, {name:"Sài hồ", weight:"12g"}], usage: "Sắc ngày 1 thang, chia 2 lần." }
        ]
    },

    // -------------------- TẬP II (21-36) --------------------
    {
        id: 21, name: "Cảm mạo (T2)", nameYHCT: "Cảm mạo",
        remedies: [
            { id: 2101, name: "Thông xị thang gia vị", pattern: "Phong hàn (Thể nhẹ)", ingredients: [{name:"Thông bạch", weight:"10g"}, {name:"Hạnh nhân", weight:"10g"}, {name:"Đậu xị", weight:"10g"}, {name:"Kinh giới", weight:"10g"}, {name:"Tô diệp", weight:"10g"}, {name:"Phòng phong", weight:"08g"}], usage: "Sắc uống mỗi ngày 01 thang, chia 2 lần." },
            { id: 2102, name: "Kinh phòng bại độc tán gia giảm", pattern: "Phong hàn (Thể nặng)", ingredients: [{name:"Kinh giới", weight:"10g"}, {name:"Cát cánh", weight:"08g"}, {name:"Phòng phong", weight:"10g"}, {name:"Phục linh", weight:"10g"}, {name:"Sinh khương", weight:"08g"}, {name:"Sinh cam thảo", weight:"04g"}, {name:"Sài hồ", weight:"08g"}, {name:"Chỉ xác", weight:"10g"}, {name:"Bạc hà", weight:"10g"}, {name:"Khương hoạt", weight:"10g"}, {name:"Xuyên khung", weight:"08g"}, {name:"Độc hoạt", weight:"10g"}, {name:"Tiền hồ", weight:"10g"}], usage: "Sắc uống mỗi ngày 01 thang, chia 2 lần." },
            { id: 2103, name: "Ngân kiều tán gia giảm", pattern: "Cảm mạo phong nhiệt", ingredients: [{name:"Kim ngân hoa", weight:"12g"}, {name:"Cát cánh", weight:"12g"}, {name:"Liên kiều", weight:"12g"}, {name:"Ngưu bàng tử", weight:"12g"}, {name:"Bạc hà", weight:"12g"}, {name:"Cam thảo", weight:"04g"}, {name:"Kinh giới", weight:"10g"}, {name:"Trúc diệp", weight:"08g"}, {name:"Đậu xị", weight:"12g"}, {name:"Lô căn", weight:"15g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 2104, name: "Tang cúc ẩm", pattern: "Phong nhiệt (Thiên ho)", ingredients: [{name:"Tang diệp", weight:"12g"}, {name:"Cúc hoa", weight:"12g"}, {name:"Hạnh nhân", weight:"12g"}, {name:"Liên kiều", weight:"12g"}, {name:"Cát cánh", weight:"12g"}, {name:"Lô căn", weight:"12g"}, {name:"Bạc hà", weight:"04g"}, {name:"Cam thảo", weight:"04g"}], usage: "Sắc uống mỗi ngày 01 thang, chia 2 lần." },
            { id: 2105, name: "Tân gia hương nhu ẩm", pattern: "Cảm mạo thử thấp", ingredients: [{name:"Hương nhu", weight:"10g"}, {name:"Hậu phác", weight:"10g"}, {name:"Kim ngân hoa", weight:"10g"}, {name:"Bạch biển đậu", weight:"10g"}, {name:"Liên kiều", weight:"10g"}], usage: "Sắc uống mỗi ngày 01 thang, chia 2 lần." },
            { id: 2106, name: "Sâm tô ẩm gia giảm", pattern: "Cảm mạo khí hư", ingredients: [{name:"Đảng sâm", weight:"10g"}, {name:"Tiền hồ", weight:"10g"}, {name:"Phục linh", weight:"10g"}, {name:"Cát cánh", weight:"08g"}, {name:"Cam thảo", weight:"06g"}, {name:"Chỉ xác", weight:"08g"}, {name:"Tô diệp", weight:"10g"}, {name:"Bán hạ", weight:"10g"}, {name:"Cát căn", weight:"10g"}, {name:"Trần bì", weight:"08g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 2107, name: "Gia giảm uy nhuy thang", pattern: "Cảm mạo âm hư", ingredients: [{name:"Ngọc trúc", weight:"12g"}, {name:"Bạc hà", weight:"08g"}, {name:"Thông bạch", weight:"12g"}, {name:"Bạch vi", weight:"08g"}, {name:"Đậu xị", weight:"12g"}, {name:"Đại táo", weight:"08g"}, {name:"Cát cánh", weight:"08g"}, {name:"Cam thảo", weight:"04g"}], usage: "Sắc uống mỗi ngày 01 thang, chia 2 lần." }
        ]
    },
    {
        id: 22, name: "Viêm mũi vận mạch và dị ứng (T2)", nameYHCT: "Tỵ cừu",
        remedies: [
            { id: 2201, name: "Ôn Phế chỉ lưu đan gia giảm", pattern: "Phế khí hư", ingredients: [{name:"Tế tân", weight:"06g"}, {name:"Ngũ vị tử", weight:"12g"}, {name:"Cát cánh", weight:"12g"}, {name:"Cam thảo", weight:"06g"}, {name:"Kinh giới", weight:"12g"}, {name:"Bạch truật", weight:"12g"}, {name:"Kha tử", weight:"12g"}, {name:"Hoàng kỳ", weight:"12g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 2202, name: "Sâm linh bạch truật tán gia giảm", pattern: "Tỳ khí hư", ingredients: [{name:"Đảng sâm", weight:"12g"}, {name:"Bạch truật", weight:"12g"}, {name:"Bạch biển đậu", weight:"12g"}, {name:"Ý dĩ nhân", weight:"12g"}, {name:"Phục linh", weight:"12g"}, {name:"Hoài sơn", weight:"12g"}, {name:"Liên tử", weight:"12g"}, {name:"Thạch xương bồ", weight:"12g"}, {name:"Trần bì", weight:"06g"}, {name:"Cát cánh", weight:"08g"}, {name:"Cam thảo", weight:"06g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 2203, name: "Đương quy thược dược tán gia vị", pattern: "Khí trệ huyết ứ", ingredients: [{name:"Đương quy", weight:"08g"}, {name:"Phục linh", weight:"12g"}, {name:"Xuyên khung", weight:"10g"}, {name:"Khương hoàng", weight:"12g"}, {name:"Thương nhĩ tử", weight:"12g"}, {name:"Bạch chỉ", weight:"08g"}, {name:"Bạch truật", weight:"12g"}, {name:"Xích thược", weight:"12g"}, {name:"Uất kim", weight:"08g"}, {name:"Tân di", weight:"08g"}, {name:"Trạch tả", weight:"12g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 2204, name: "Hữu quy hoàn gia giảm", pattern: "Thận dương hư", ingredients: [{name:"Thục địa", weight:"12g"}, {name:"Đỗ trọng", weight:"12g"}, {name:"Hoài sơn", weight:"12g"}, {name:"Tân di", weight:"10g"}, {name:"Sơn thù", weight:"10g"}, {name:"Tế tân", weight:"06g"}, {name:"Phụ tử chế", weight:"06g"}, {name:"Thỏ ty tử", weight:"12g"}, {name:"Quế nhục", weight:"06g"}, {name:"Đương quy", weight:"12g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 2205, name: "Tả quy hoàn gia giảm", pattern: "Thận âm hư", ingredients: [{name:"Thục địa", weight:"12g"}, {name:"Mạch môn", weight:"12g"}, {name:"Hoài sơn", weight:"12g"}, {name:"Đương quy", weight:"12g"}, {name:"Sơn thù", weight:"10g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Kỷ tử", weight:"12g"}, {name:"Tân di", weight:"10g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." }
        ]
    },
    {
        id: 23, name: "Sốt xuất huyết Dengue (T2)", nameYHCT: "Ôn bệnh",
        remedies: [
            { id: 2301, name: "Tang cúc ẩm (Ôn bệnh)", pattern: "Ôn tà ở vệ phận (Không xuất huyết)", ingredients: [{name:"Tang diệp", weight:"12g"}, {name:"Cúc hoa", weight:"12g"}, {name:"Liên kiều", weight:"12g"}, {name:"Hạnh nhân", weight:"12g"}, {name:"Lô căn", weight:"12g"}, {name:"Cát cánh", weight:"06g"}, {name:"Cam thảo", weight:"04g"}, {name:"Bạc hà", weight:"06g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 2302, name: "Tứ sinh thang (Ôn bệnh)", pattern: "Ôn tà ở vệ phận (Có xuất huyết)", ingredients: [{name:"Sinh địa", weight:"12g"}, {name:"Sinh trắc bách diệp", weight:"12g"}, {name:"Sinh hà diệp", weight:"12g"}, {name:"Sinh ngải diệp", weight:"12g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 2303, name: "Ích vị thang (SXH)", pattern: "Thể vị âm bất túc (Hồi phục)", ingredients: [{name:"Sa sâm", weight:"12g"}, {name:"Sinh địa", weight:"12g"}, {name:"Mạch môn", weight:"12g"}, {name:"Ngọc trúc", weight:"08g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." }
        ]
    },
    {
        id: 24, name: "Trào ngược dạ dày thực quản (T2)", nameYHCT: "Vị khí nghịch",
        remedies: [
            { id: 2401, name: "Hoắc hương chính khí tán gia giảm", pattern: "Thể ngoại tà phạm vị", ingredients: [{name:"Hoắc hương", weight:"10g"}, {name:"Tô diệp", weight:"08g"}, {name:"Bạch chỉ", weight:"08g"}, {name:"Bán hạ chế", weight:"10g"}, {name:"Hậu phác", weight:"10g"}, {name:"Trần bì", weight:"08g"}, {name:"Cam thảo", weight:"04g"}, {name:"Đại táo", weight:"08g"}, {name:"Sinh khương", weight:"06g"}], usage: "Sắc uống ngày 1 thang khi thuốc còn ấm." },
            { id: 2402, name: "Sài hồ sơ can tán (GERD)", pattern: "Thể Can khí phạm Vị (Khí trệ)", ingredients: [{name:"Sài hồ", weight:"12g"}, {name:"Xuyên khung", weight:"08g"}, {name:"Chỉ xác", weight:"08g"}, {name:"Hương phụ", weight:"08g"}, {name:"Bạch thược", weight:"12g"}, {name:"Trần bì", weight:"08g"}, {name:"Cam thảo", weight:"06g"}], usage: "Sắc uống ngày 1 thang." },
            { id: 2403, name: "Hóa can tiễn hợp Tả kim hoàn", pattern: "Thể Can khí phạm Vị (Hỏa uất)", ingredients: [{name:"Thanh bì", weight:"08g"}, {name:"Bạch thược", weight:"12g"}, {name:"Chi tử", weight:"08g"}, {name:"Đan bì", weight:"08g"}, {name:"Trần bì", weight:"06g"}, {name:"Hoàng liên", weight:"08g"}, {name:"Trạch tả", weight:"08g"}], usage: "Sắc uống ngày 1 thang." },
            { id: 2404, name: "Thất tiếu tán (GERD)", pattern: "Thể huyết ứ (Thực chứng)", ingredients: [{name:"Ngũ linh chi", weight:"10g"}, {name:"Bồ hoàng", weight:"10g"}], usage: "Tán bột mỗi ngày uống 10g chia 2 lần." },
            { id: 2405, name: "Hoàng kỳ kiến trung thang (GERD)", pattern: "Thể Tỳ Vị hư hàn", ingredients: [{name:"Hoàng kỳ", weight:"16g"}, {name:"Quế chi", weight:"08g"}, {name:"Sinh khương", weight:"06g"}, {name:"Bạch thược", weight:"08g"}, {name:"Chích cam thảo", weight:"06g"}, {name:"Đại táo", weight:"12g"}, {name:"Hương phụ", weight:"08g"}, {name:"Di đường", weight:"08g"}], usage: "Sắc uống ngày 1 thang." }
        ]
    },
    {
        id: 25, name: "Hội chứng ruột kích thích (T2)", nameYHCT: "Tiết tả, tiện bí",
        remedies: [
            { id: 2501, name: "Thống tả yếu phương (IBS)", pattern: "Thể Can Tỳ bất hòa", ingredients: [{name:"Bạch truật", weight:"12g"}, {name:"Bạch thược", weight:"09g"}, {name:"Phòng phong", weight:"06g"}, {name:"Trần bì", weight:"06g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 2502, name: "Sâm linh bạch truật tán (IBS)", pattern: "Thể Tỳ hư thấp trệ", ingredients: [{name:"Đảng sâm", weight:"12g"}, {name:"Bạch biển đậu (sao)", weight:"12g"}, {name:"Trần bì", weight:"06g"}, {name:"Bạch truật (sao)", weight:"12g"}, {name:"Chích thảo", weight:"06g"}, {name:"Ý dĩ (sao)", weight:"12g"}, {name:"Phục linh", weight:"12g"}, {name:"Liên nhục", weight:"12g"}, {name:"Cát cánh", weight:"08g"}, {name:"Hoài sơn (sao)", weight:"12g"}, {name:"Sa nhân", weight:"06g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 2503, name: "Phụ tử lý trung hợp Tứ thần hoàn", pattern: "Thể Tỳ Thận dương hư", ingredients: [{name:"Can khương", weight:"12g"}, {name:"Chích thảo", weight:"12g"}, {name:"Đảng sâm", weight:"12g"}, {name:"Thục phụ tử", weight:"12g"}, {name:"Bạch truật", weight:"12g"}, {name:"Bổ cốt chỉ", weight:"16g"}, {name:"Nhục đậu khấu", weight:"08g"}, {name:"Ngũ vị tử", weight:"06g"}, {name:"Ngô thù du", weight:"04g"}, {name:"Đại táo", weight:"12g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 2504, name: "Cát căn cầm liên thang (IBS)", pattern: "Thể Đại trường thấp nhiệt", ingredients: [{name:"Cát căn", weight:"12g"}, {name:"Hoàng cầm", weight:"12g"}, {name:"Hoàng liên", weight:"10g"}, {name:"Cam thảo", weight:"06g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 2505, name: "Ô mai thang (IBS)", pattern: "Thể hàn nhiệt thác tạp", ingredients: [{name:"Can khương", weight:"08g"}, {name:"Đương quy", weight:"08g"}, {name:"Hoàng bá", weight:"10g"}, {name:"Hoàng liên", weight:"12g"}, {name:"Nhân sâm", weight:"10g"}, {name:"Ô mai", weight:"12g"}, {name:"Phụ tử chế", weight:"06g"}, {name:"Quế chi", weight:"06g"}, {name:"Tế tân", weight:"04g"}, {name:"Xuyên tiêu", weight:"04g"}], usage: "Sắc uống ngày 01 thang, chia 2-3 lần." }
        ]
    },
    {
        id: 26, name: "Táo bón (T2)", nameYHCT: "Tiện bí",
        remedies: [
            { id: 2601, name: "Điều vị thừa khí thang (Táo bón)", pattern: "Thể nhiệt kết trường vị", ingredients: [{name:"Cam thảo", weight:"08g"}, {name:"Mang tiêu", weight:"08g"}, {name:"Đại hoàng", weight:"16g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần. Đại hoàng sắc sau, mang tiêu hòa tan uống." },
            { id: 2602, name: "Lục ma thang (Táo bón)", pattern: "Thể khí trệ", ingredients: [{name:"Trầm hương", weight:"08g"}, {name:"Binh lang", weight:"08g"}, {name:"Mộc hương", weight:"08g"}, {name:"Chỉ thực", weight:"08g"}, {name:"Đại hoàng", weight:"08g"}, {name:"Ô dược", weight:"08g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần. Đại hoàng sắc sau." },
            { id: 2603, name: "Đại hoàng phụ tử gia giảm", pattern: "Thể lãnh bí (Lý thực hàn)", ingredients: [{name:"Đại hoàng", weight:"08g"}, {name:"Phụ tử chế", weight:"08g"}, {name:"Tế tân", weight:"04g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần. Đại hoàng sắc sau." },
            { id: 2604, name: "Hoàng kỳ thang (Táo bón)", pattern: "Thể khí hư", ingredients: [{name:"Hoàng kỳ", weight:"24g"}, {name:"Trần bì", weight:"10g"}, {name:"Mật ong", weight:"10g"}, {name:"Hắc chi ma", weight:"12g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 2605, name: "Nhuận trường hoàn (Táo bón)", pattern: "Thể huyết hư", ingredients: [{name:"Sinh địa", weight:"12g"}, {name:"Hắc chi ma", weight:"12g"}, {name:"Chỉ xác", weight:"08g"}, {name:"Đương quy", weight:"12g"}, {name:"Đào nhân chế", weight:"06g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 2606, name: "Tăng dịch thang (Táo bón)", pattern: "Thể âm hư", ingredients: [{name:"Huyền sâm", weight:"40g"}, {name:"Mạch môn", weight:"32g"}, {name:"Sinh địa", weight:"32g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 2607, name: "Tế xuyên tiễn gia quế nhục", pattern: "Thể dương hư", ingredients: [{name:"Nhục thung dung", weight:"06g"}, {name:"Chỉ xác", weight:"06g"}, {name:"Đương quy", weight:"12g"}, {name:"Thăng ma", weight:"10g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Nhục quế", weight:"04g"}, {name:"Trạch tả", weight:"08g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." }
        ]
    },
    {
        id: 27, name: "Đái dầm (T2)", nameYHCT: "Di niệu",
        remedies: [
            { id: 2701, name: "Tang phiêu tiêu hoàn (Di niệu)", pattern: "Hạ nguyên hư hàn (Thận dương hư)", ingredients: [{name:"Tang phiêu tiêu", weight:"03g"}, {name:"Long cốt", weight:"08g"}, {name:"Ngũ vị tử", weight:"08g"}, {name:"Viễn chí", weight:"08g"}, {name:"Đảng sâm", weight:"08g"}, {name:"Xương bồ", weight:"08g"}, {name:"Phục thần", weight:"08g"}, {name:"Hắc phụ tử", weight:"08g"}, {name:"Đương quy", weight:"08g"}], usage: "Tán bột làm hoàn. Mỗi ngày uống 8-10g chia 2 lần lúc đói." },
            { id: 2702, name: "Bổ trung ích khí hợp Súc tuyền", pattern: "Thể Tỳ Phế hư tổn", ingredients: [{name:"Đảng sâm", weight:"08g"}, {name:"Trần bì", weight:"04g"}, {name:"Hoàng kỳ", weight:"08g"}, {name:"Cam thảo", weight:"04g"}, {name:"Đương quy", weight:"06g"}, {name:"Hoài sơn", weight:"08g"}, {name:"Bạch truật", weight:"06g"}, {name:"Ô dược", weight:"06g"}, {name:"Thăng ma", weight:"06g"}, {name:"Ích trí nhân", weight:"06g"}, {name:"Sài hồ", weight:"06g"}], usage: "Sắc uống mỗi ngày 01 thang, chia 2 lần." },
            { id: 2703, name: "Giao thái hoàn hợp Đạo xích tán", pattern: "Thể Tâm Thận bất giao", ingredients: [{name:"Sinh địa", weight:"08g"}, {name:"Trúc diệp", weight:"08g"}, {name:"Hoàng liên", weight:"06g"}, {name:"Mộc thông", weight:"06g"}, {name:"Cam thảo", weight:"04g"}, {name:"Nhục quế", weight:"02g"}], usage: "Sắc uống mỗi ngày 01 thang, chia 2 lần." },
            { id: 2704, name: "Long đởm tả can thang (Di niệu)", pattern: "Thể thấp nhiệt ở kinh Can", ingredients: [{name:"Long đởm thảo", weight:"08g"}, {name:"Hoàng cầm", weight:"06g"}, {name:"Chi tử", weight:"04g"}, {name:"Sài hồ", weight:"06g"}, {name:"Sinh địa", weight:"06g"}, {name:"Xa tiền tử", weight:"06g"}, {name:"Trạch tả", weight:"06g"}, {name:"Thông thảo", weight:"06g"}, {name:"Cam thảo", weight:"04g"}, {name:"Đương quy", weight:"08g"}], usage: "Sắc uống mỗi ngày 01 thang, chia 2 lần." }
        ]
    },
    {
        id: 28, name: "Sỏi tiết niệu (T2)", nameYHCT: "Thạch lâm",
        remedies: [
            { id: 2801, name: "Tứ vật đào hồng gia vị (Sỏi)", pattern: "Thể khí trệ huyết ứ", ingredients: [{name:"Sinh địa", weight:"16g"}, {name:"Xuyên khung", weight:"12g"}, {name:"Đào nhân chế", weight:"08g"}, {name:"Hồng hoa", weight:"06g"}, {name:"Bạch thược", weight:"12g"}, {name:"Đương quy", weight:"12g"}, {name:"Đại phúc bì", weight:"12g"}, {name:"Kê nội kim", weight:"08g"}, {name:"Chi thực", weight:"08g"}, {name:"Uất kim", weight:"08g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 2802, name: "Đạo xích tán gia vị (Sỏi)", pattern: "Thể thấp nhiệt", ingredients: [{name:"Sinh địa", weight:"16g"}, {name:"Kim tiền thảo", weight:"40g"}, {name:"Hoàng cầm", weight:"12g"}, {name:"Đăng tâm", weight:"12g"}, {name:"Cam thảo", weight:"08g"}, {name:"Trúc diệp", weight:"16g"}, {name:"Mộc thông", weight:"12g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 2803, name: "Tế sinh thận khí hoàn gia giảm", pattern: "Thể Thận hư", ingredients: [{name:"Thục địa", weight:"16g"}, {name:"Mẫu đơn bì", weight:"12g"}, {name:"Hoài sơn", weight:"12g"}, {name:"Phụ tử chế", weight:"08g"}, {name:"Sơn thù", weight:"12g"}, {name:"Kim tiền thảo", weight:"20g"}, {name:"Phục linh", weight:"12g"}, {name:"Kê nội kim", weight:"08g"}, {name:"Trạch tả", weight:"12g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." }
        ]
    },
    {
        id: 29, name: "Tăng sinh lành tính tuyến tiền liệt (T2)", nameYHCT: "Long bế",
        remedies: [
            { id: 2901, name: "Tế sinh thận khí hoàn (TTL)", pattern: "Thể Thận khí hư", ingredients: [{name:"Thục địa", weight:"16g"}, {name:"Hoài sơn", weight:"10g"}, {name:"Sơn thù", weight:"10g"}, {name:"Đan bì", weight:"08g"}, {name:"Phục linh", weight:"10g"}, {name:"Trạch tả", weight:"08g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Xa tiền tử", weight:"12g"}, {name:"Phụ tử chế", weight:"04g"}, {name:"Quế chi", weight:"06g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 2902, name: "Tiểu kế ẩm tử (TTL)", pattern: "Thể đàm trệ huyết ứ", ingredients: [{name:"Sinh địa", weight:"20g"}, {name:"Tiểu kế", weight:"20g"}, {name:"Hoạt thạch", weight:"20g"}, {name:"Bồ hoàng", weight:"12g"}, {name:"Ngẫu tiết", weight:"12g"}, {name:"Đương quy", weight:"12g"}, {name:"Chi tử", weight:"10g"}, {name:"Xa tiền tử", weight:"12g"}, {name:"Đạm trúc diệp", weight:"10g"}, {name:"Chích thảo", weight:"06g"}], usage: "Sắc ngày 1 thang, hòa bột Hoạt thạch uống." },
            { id: 2903, name: "Bát chính tán (TTL)", pattern: "Thể thấp nhiệt", ingredients: [{name:"Xa tiền tử", weight:"12g"}, {name:"Mộc thông", weight:"04g"}, {name:"Hoạt thạch", weight:"16g"}, {name:"Chi tử", weight:"08g"}, {name:"Đại hoàng chế", weight:"08g"}, {name:"Cam thảo", weight:"04g"}, {name:"Cù mạch", weight:"12g"}, {name:"Biển súc", weight:"12g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." }
        ]
    },
    {
        id: 30, name: "Loãng xương (T2)", nameYHCT: "Cốt tý",
        remedies: [
            { id: 3001, name: "Tả quy hoàn (Loãng xương)", pattern: "Thể Thận tinh bất túc", ingredients: [{name:"Thục địa", weight:"16g"}, {name:"Kỷ tử", weight:"12g"}, {name:"Hoài sơn", weight:"10g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Sơn thù", weight:"12g"}, {name:"Lộc giác giao", weight:"10g"}, {name:"Thỏ ti tử", weight:"12g"}, {name:"Quy bản", weight:"10g"}], usage: "Sắc mỗi ngày 1 thang. Cao Lộc giác giao hòa uống." },
            { id: 3002, name: "Thận khí hoàn (Loãng xương)", pattern: "Thể Thận dương hư", ingredients: [{name:"Thục địa", weight:"12g"}, {name:"Trạch tả", weight:"08g"}, {name:"Hoài sơn", weight:"12g"}, {name:"Phục linh", weight:"08g"}, {name:"Sơn thù", weight:"08g"}, {name:"Nhục quế", weight:"06g"}, {name:"Đan bì", weight:"08g"}, {name:"Hắc phụ tử", weight:"06g"}], usage: "Sắc uống mỗi ngày 01 thang, chia 2 lần." },
            { id: 3003, name: "Huyết phủ trục ứ (Loãng xương)", pattern: "Thể khí trệ huyết ứ", ingredients: [{name:"Đương quy", weight:"12g"}, {name:"Sinh địa", weight:"12g"}, {name:"Đào nhân chế", weight:"16g"}, {name:"Hồng hoa", weight:"12g"}, {name:"Sài hồ", weight:"04g"}, {name:"Xuyên khung", weight:"06g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Xích thược", weight:"08g"}, {name:"Cát cánh", weight:"06g"}, {name:"Chỉ xác", weight:"08g"}, {name:"Cam thảo", weight:"04g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." }
        ]
    },
    {
        id: 31, name: "Đái tháo đường (T2)", nameYHCT: "Tiêu khát",
        remedies: [
            { id: 3101, name: "Bạch hổ gia nhân sâm hợp Ngọc dịch", pattern: "Thể Phế Vị táo nhiệt", ingredients: [{name:"Thạch cao", weight:"12g"}, {name:"Nhân sâm/Đảng sâm", weight:"12g"}, {name:"Tri mẫu", weight:"10g"}, {name:"Ngạnh mễ", weight:"12g"}, {name:"Cam thảo", weight:"06g"}, {name:"Cát căn", weight:"12g"}, {name:"Sinh hoàng kỳ", weight:"12g"}, {name:"Kê nội kim", weight:"08g"}, {name:"Hoài sơn", weight:"12g"}, {name:"Thiên hoa phấn", weight:"12g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 3102, name: "Lục vị địa hoàng hoàn (ĐTĐ)", pattern: "Thể Can Thận âm hư", ingredients: [{name:"Sinh địa", weight:"16g"}, {name:"Bạch linh", weight:"10g"}, {name:"Sơn thù", weight:"10g"}, {name:"Mẫu đơn bì", weight:"08g"}, {name:"Hoài sơn", weight:"10g"}, {name:"Trạch tả", weight:"08g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 3103, name: "Sinh mạch tán hợp Lục vị địa hoàng", pattern: "Thể khí âm lưỡng hư", ingredients: [{name:"Nhân sâm", weight:"08g"}, {name:"Sinh địa", weight:"12g"}, {name:"Mạch môn", weight:"12g"}, {name:"Hoài sơn", weight:"08g"}, {name:"Ngũ vị tử", weight:"08g"}, {name:"Sơn thù", weight:"08g"}, {name:"Mẫu đơn bì", weight:"06g"}, {name:"Trạch tả", weight:"06g"}, {name:"Bạch linh", weight:"08g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 3104, name: "Kim quỹ thận khí hoàn (ĐTĐ)", pattern: "Thể âm dương lưỡng hư", ingredients: [{name:"Sinh địa", weight:"16g"}, {name:"Bạch linh", weight:"10g"}, {name:"Sơn thù", weight:"10g"}, {name:"Mẫu đơn bì", weight:"08g"}, {name:"Hoài sơn", weight:"10g"}, {name:"Trạch tả", weight:"08g"}, {name:"Nhục quế", weight:"04g"}, {name:"Phụ tử chế", weight:"04g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Xa tiền tử", weight:"12g"}], usage: "Sắc ngày 1 thang, chia 2 lần." },
            { id: 3105, name: "Huyết phủ trục ứ (ĐTĐ)", pattern: "Thể huyết ứ", ingredients: [{name:"Đào nhân", weight:"10g"}, {name:"Chi xác", weight:"10g"}, {name:"Hồng hoa", weight:"08g"}, {name:"Sài hồ", weight:"08g"}, {name:"Xuyên khung", weight:"08g"}, {name:"Cát cánh", weight:"08g"}, {name:"Xích thược", weight:"10g"}, {name:"Cam thảo", weight:"04g"}, {name:"Ngưu tất", weight:"10g"}, {name:"Sinh địa", weight:"10g"}, {name:"Đương quy", weight:"10g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." }
        ]
    },
    {
        id: 32, name: "Suy nhược cơ thể (T2)", nameYHCT: "Hư lao",
        remedies: [
            { id: 3201, name: "Bổ Phế thang (Hư lao)", pattern: "Phế khí hư", ingredients: [{name:"Đảng sâm", weight:"12g"}, {name:"Hoàng kỳ", weight:"16g"}, {name:"Thục địa", weight:"08g"}, {name:"Ngũ vị tử", weight:"08g"}, {name:"Tử uyển", weight:"12g"}, {name:"Tang bạch bì", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 3202, name: "Quy tỳ thang (Hư lao)", pattern: "Tâm khí hư", ingredients: [{name:"Bạch truật", weight:"12g"}, {name:"Đảng sâm", weight:"12g"}, {name:"Phục thần", weight:"12g"}, {name:"Mộc hương", weight:"06g"}, {name:"Hoàng kỳ", weight:"12g"}, {name:"Cam thảo chích", weight:"06g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 3203, name: "Hương sa lục quân tử (Hư lao)", pattern: "Tỳ khí hư", ingredients: [{name:"Đảng sâm", weight:"10g"}, {name:"Phục linh", weight:"09g"}, {name:"Bạch truật", weight:"09g"}, {name:"Cam thảo", weight:"06g"}, {name:"Trần bì", weight:"09g"}, {name:"Bán hạ chế", weight:"12g"}, {name:"Sa nhân", weight:"06g"}, {name:"Mộc hương", weight:"06g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 3204, name: "Đại bổ nguyên tiễn (Hư lao)", pattern: "Thận khí hư", ingredients: [{name:"Đảng sâm", weight:"15g"}, {name:"Hoài sơn", weight:"09g"}, {name:"Chích thảo", weight:"06g"}, {name:"Đỗ trọng", weight:"09g"}, {name:"Thục địa", weight:"09g"}, {name:"Đương quy", weight:"09g"}, {name:"Câu kỷ tử", weight:"09g"}, {name:"Sơn thù", weight:"09g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 3205, name: "Dưỡng tâm thang (Hư lao)", pattern: "Tâm huyết hư", ingredients: [{name:"Hoàng kỳ", weight:"12g"}, {name:"Phục thần", weight:"12g"}, {name:"Ngũ vị tử", weight:"06g"}, {name:"Đảng sâm", weight:"12g"}, {name:"Hắc táo nhân", weight:"08g"}, {name:"Bán hạ chế", weight:"12g"}, {name:"Đương quy", weight:"12g"}, {name:"Bá tử nhân", weight:"08g"}, {name:"Nhục quế", weight:"04g"}, {name:"Xuyên khung", weight:"06g"}, {name:"Viễn chí", weight:"06g"}, {name:"Cam thảo", weight:"06g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 3206, name: "Tứ vật thang (Hư lao)", pattern: "Can huyết hư", ingredients: [{name:"Thục địa", weight:"12g"}, {name:"Xuyên khung", weight:"08g"}, {name:"Đương quy", weight:"12g"}, {name:"Bạch thược", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 3207, name: "Phụ tử lý trung (Hư lao)", pattern: "Tỳ dương hư", ingredients: [{name:"Đảng sâm", weight:"12g"}, {name:"Bạch truật", weight:"12g"}, {name:"Can khương", weight:"06g"}, {name:"Cam thảo", weight:"06g"}, {name:"Phụ tử chế", weight:"04g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 3208, name: "Thận khí hoàn (Hư lao)", pattern: "Thận dương hư", ingredients: [{name:"Thục địa", weight:"24g"}, {name:"Sơn thù", weight:"12g"}, {name:"Hoài sơn", weight:"12g"}, {name:"Trạch tả", weight:"08g"}, {name:"Đan bì", weight:"08g"}, {name:"Bạch linh", weight:"08g"}, {name:"Nhục quế", weight:"04g"}, {name:"Phụ tử chế", weight:"04g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 3209, name: "Sa sâm mạch đông (Hư lao)", pattern: "Phế âm hư", ingredients: [{name:"Sa sâm", weight:"16g"}, {name:"Mạch môn", weight:"16g"}, {name:"Ngọc trúc", weight:"08g"}, {name:"Tang diệp", weight:"08g"}, {name:"Thiên hoa phấn", weight:"08g"}, {name:"Biển đậu", weight:"08g"}, {name:"Cam thảo", weight:"06g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 3210, name: "Thiên vương bổ tâm đan", pattern: "Tâm âm hư", ingredients: [{name:"Sinh địa", weight:"12g"}, {name:"Huyền sâm", weight:"12g"}, {name:"Thiên môn", weight:"10g"}, {name:"Mạch môn", weight:"08g"}, {name:"Đan sâm", weight:"16g"}, {name:"Đương quy", weight:"12g"}, {name:"Đảng sâm", weight:"12g"}, {name:"Phục thần", weight:"12g"}, {name:"Táo nhân chế", weight:"12g"}, {name:"Ngũ vị tử", weight:"08g"}, {name:"Bá tử nhân", weight:"08g"}, {name:"Viễn chí chế", weight:"06g"}, {name:"Thiên ma", weight:"10g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 3211, name: "Ích vị thang (Hư lao)", pattern: "Tỳ Vị âm hư", ingredients: [{name:"Sa sâm", weight:"12g"}, {name:"Sinh địa", weight:"12g"}, {name:"Mạch môn", weight:"12g"}, {name:"Ngọc trúc", weight:"12g"}, {name:"Đường phèn", weight:"20g"}], usage: "Sắc lấy nước hòa đường phèn uống ngày 1 thang, chia 2 lần." },
            { id: 3212, name: "Bổ can thang (Hư lao)", pattern: "Can âm hư", ingredients: [{name:"Đương quy", weight:"12g"}, {name:"Thục địa", weight:"12g"}, {name:"Bạch thược", weight:"12g"}, {name:"Xuyên khung", weight:"08g"}, {name:"Mộc qua", weight:"08g"}, {name:"Cam thảo", weight:"06g"}, {name:"Mạch môn", weight:"12g"}, {name:"Hắc táo nhân", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 3213, name: "Tả quy hoàn (Hư lao)", pattern: "Thận âm hư", ingredients: [{name:"Thục địa", weight:"12g"}, {name:"Sơn thù", weight:"08g"}, {name:"Hoài sơn", weight:"12g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Lộc giác giao", weight:"12g"}, {name:"Kỷ tử", weight:"12g"}, {name:"Thỏ ty tử", weight:"12g"}, {name:"Quy bản", weight:"10g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." }
        ]
    },
    {
        id: 33, name: "Mất ngủ (T2)", nameYHCT: "Thất miên",
        remedies: [
            { id: 3301, name: "Quy tỳ thang (Mất ngủ)", pattern: "Thể Tâm Tỳ lưỡng hư", ingredients: [{name:"Đảng sâm", weight:"12g"}, {name:"Hoàng kỳ", weight:"16g"}, {name:"Bạch truật", weight:"12g"}, {name:"Phục thần", weight:"12g"}, {name:"Đương quy", weight:"10g"}, {name:"Toan táo nhân", weight:"12g"}, {name:"Mộc hương", weight:"06g"}, {name:"Chích cam thảo", weight:"04g"}, {name:"Viễn chí", weight:"06g"}, {name:"Long nhãn", weight:"12g"}], usage: "Sắc uống ngày 01 thang, chia 3 lần." },
            { id: 3302, name: "Giao thái hoàn hợp Đạo xích tán", pattern: "Thể âm hư hỏa vượng (Tâm Thận bất giao)", ingredients: [{name:"Hoàng liên", weight:"12g"}, {name:"Nhục quế", weight:"04g"}, {name:"Sinh địa", weight:"08g"}, {name:"Trúc diệp", weight:"08g"}, {name:"Mộc thông", weight:"06g"}, {name:"Cam thảo", weight:"04g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 3303, name: "An thần định chí hoàn", pattern: "Thể Tâm Đởm khí hư", ingredients: [{name:"Viễn chí", weight:"08g"}, {name:"Đảng sâm", weight:"12g"}, {name:"Phục linh", weight:"12g"}, {name:"Phục thần", weight:"12g"}, {name:"Xương bồ", weight:"16g"}], usage: "Luyện mật làm hoàn mật uống 8g/lần với nước sôi để nguội." },
            { id: 3304, name: "Long đởm tả can thang (Mất ngủ)", pattern: "Thể Can uất hóa hỏa", ingredients: [{name:"Long đởm thảo", weight:"08g"}, {name:"Chi tử", weight:"08g"}, {name:"Sài hồ", weight:"12g"}, {name:"Sinh địa", weight:"12g"}, {name:"Xa tiền", weight:"12g"}, {name:"Đương quy", weight:"08g"}, {name:"Trạch tả", weight:"08g"}, {name:"Thạch tả", weight:"08g"}], usage: "Sắc uống ngày 1 thang." },
            { id: 3305, name: "Ôn đởm thang (Mất ngủ)", pattern: "Thể đàm nhiệt nội nhiễu", ingredients: [{name:"Bán hạ chế", weight:"12g"}, {name:"Chỉ thực", weight:"12g"}, {name:"Trúc nhự", weight:"12g"}, {name:"Trần bì", weight:"12g"}, {name:"Cam thảo", weight:"06g"}, {name:"Phục linh", weight:"10g"}], usage: "Sắc uống ngày 1 thang." }
        ]
    },
    {
        id: 34, name: "Rối loạn chức năng tiền đình (T2)", nameYHCT: "Huyễn vựng",
        remedies: [
            { id: 3401, name: "Thiên ma câu đằng ẩm (Tiền đình)", pattern: "Thể Can dương thượng cang", ingredients: [{name:"Thiên ma", weight:"08g"}, {name:"Câu đằng", weight:"16g"}, {name:"Sinh thạch quyết minh", weight:"20g"}, {name:"Phục thần", weight:"16g"}, {name:"Tang ký sinh", weight:"12g"}, {name:"Đỗ trọng", weight:"16g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Dạ giao đằng", weight:"20g"}, {name:"Chi tử", weight:"12g"}, {name:"Hoàng cầm", weight:"12g"}, {name:"Ích mẫu", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 3402, name: "Bán hạ bạch truật thiên ma (Tiền đình)", pattern: "Thể đàm trọc trung trở", ingredients: [{name:"Bán hạ chế", weight:"12g"}, {name:"Thiên ma", weight:"12g"}, {name:"Phục linh", weight:"12g"}, {name:"Bạch truật", weight:"12g"}, {name:"Cam thảo", weight:"04g"}, {name:"Trần bì", weight:"08g"}, {name:"Sinh khương", weight:"06g"}, {name:"Đại táo", weight:"12g"}], usage: "Sắc uống ngày 1 thang, chia 2 lần." },
            { id: 3403, name: "Thập toàn đại bổ (Tiền đình)", pattern: "Thể khí huyết hư suy", ingredients: [{name:"Đương quy", weight:"10g"}, {name:"Đảng sâm", weight:"12g"}, {name:"Xuyên khung", weight:"05g"}, {name:"Phục linh", weight:"08g"}, {name:"Thục địa", weight:"15g"}, {name:"Bạch truật", weight:"10g"}, {name:"Bạch thược", weight:"08g"}, {name:"Cam thảo", weight:"05g"}, {name:"Hoàng kỳ", weight:"15g"}, {name:"Nhục quế", weight:"06g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." }
        ]
    },
    {
        id: 35, name: "Nhồi máu não (T2)", nameYHCT: "Trúng phong",
        remedies: [
            { id: 3501, name: "Thiên ma câu đằng ẩm (NMN)", pattern: "Thể Can dương thượng cang", ingredients: [{name:"Thiên ma", weight:"10g"}, {name:"Câu đằng", weight:"12g"}, {name:"Sinh thạch quyết minh", weight:"10g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Hoàng cầm", weight:"08g"}, {name:"Chi tử", weight:"10g"}, {name:"Đỗ trọng", weight:"10g"}, {name:"Tang ký sinh", weight:"10g"}, {name:"Phục thần", weight:"12g"}, {name:"Dạ giao đằng", weight:"12g"}, {name:"Ích mẫu thảo", weight:"10g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 3502, name: "Hóa đàm thông lạc thang (NMN)", pattern: "Thể phong đàm trở lạc", ingredients: [{name:"Bán hạ chế", weight:"12g"}, {name:"Phục linh", weight:"12g"}, {name:"Bạch truật chế", weight:"12g"}, {name:"Đởm nam tinh", weight:"12g"}, {name:"Thiên trúc hoàng", weight:"08g"}, {name:"Thiên ma", weight:"10g"}, {name:"Hương phụ", weight:"12g"}, {name:"Đan sâm", weight:"12g"}, {name:"Đại hoàng", weight:"06g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 3503, name: "Trấn can tức phong thang (NMN)", pattern: "Thể âm hư động phong", ingredients: [{name:"Long cốt", weight:"12g"}, {name:"Mẫu lệ", weight:"12g"}, {name:"Bạch thược", weight:"12g"}, {name:"Đại giả thạch", weight:"10g"}, {name:"Thiên môn", weight:"10g"}, {name:"Huyền sâm", weight:"10g"}, {name:"Qui bản", weight:"12g"}, {name:"Ngưu tất", weight:"12g"}, {name:"Nhân trần", weight:"12g"}, {name:"Mạch nha", weight:"10g"}, {name:"Xuyên luyện tử", weight:"10g"}, {name:"Cam thảo", weight:"04g"}], usage: "Sắc Đại giả thạch trước 1 giờ, cho các vị còn lại vào sắc cùng." },
            { id: 3504, name: "Bổ dương hoàn ngũ thang (NMN)", pattern: "Thể khí hư huyết ứ", ingredients: [{name:"Hoàng kỳ", weight:"24g"}, {name:"Đào nhân", weight:"10g"}, {name:"Hồng hoa", weight:"08g"}, {name:"Xuyên khung", weight:"10g"}, {name:"Đương quy", weight:"10g"}, {name:"Xích thược", weight:"10g"}, {name:"Địa long", weight:"06g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." }
        ]
    },
    {
        id: 36, name: "Xuất huyết não (T2)", nameYHCT: "Trúng phong",
        remedies: [
            { id: 3601, name: "An cung ngưu hoàng hoàn", pattern: "Thể phong hỏa bế khiếu", ingredients: [{name:"Ngưu hoàng", weight:"40g"}, {name:"Băng phiến", weight:"08g"}, {name:"Thủy ngưu giác", weight:"40g"}, {name:"Xạ hương", weight:"08g"}, {name:"Trân châu", weight:"10g"}, {name:"Chu sa", weight:"40g"}, {name:"Hùng hoàng", weight:"40g"}, {name:"Hoàng liên", weight:"40g"}, {name:"Hoàng cầm", weight:"40g"}, {name:"Chi tử", weight:"40g"}, {name:"Uất kim", weight:"40g"}], usage: "Dùng theo chỉ định cấp cứu tại cơ sở y tế." },
            { id: 3602, name: "Linh dương giác thang", pattern: "Thể đàm hỏa bế khiếu", ingredients: [{name:"Cúc hoa", weight:"10g"}, {name:"Hạ khô thảo", weight:"16g"}, {name:"Thuyền thoái", weight:"06g"}, {name:"Thạch quyết minh", weight:"12g"}, {name:"Quy bản", weight:"12g"}, {name:"Bạch thược", weight:"10g"}, {name:"Sinh địa", weight:"12g"}, {name:"Mẫu đơn bì", weight:"10g"}], usage: "Sắc uống ngày 01 thang, chia 2 lần." },
            { id: 3603, name: "Sâm phụ thang", pattern: "Chứng thoát (Nguyên khí suy kiệt)", ingredients: [{name:"Nhân sâm", weight:"16g"}, {name:"Phụ tử chế", weight:"12g"}], usage: "Sắc uống cấp cứu." }
        ]
    }
];

        // ==================== BIẾN TOÀN CỤC ====================
        let currentView = 'grouped';
        let currentModalRemedyId = null;
        let allRemedies = [];
        let allHerbs = new Set();
        let allPatterns = new Set();
        let favoritesViewMode = 'grid'; // 'grid', 'compact'

        // ==================== KHỞI TẠO ỨNG DỤNG ====================
        document.addEventListener('DOMContentLoaded', function() {
            initializeData();
            initTabs();
            populateFilters();
            showAll();
            updateStatistics();
            attachEventListeners();
            updateFavoritesCount();
        });

        function initializeData() {
            const remedyMap = new Map();
            
            diseasesData.forEach(disease => {
                disease.remedies.forEach(remedy => {
                    if (!remedyMap.has(remedy.id)) {
                        const remedyClone = {
                            ...remedy,
                            diseases: [{
                                id: disease.id,
                                name: disease.name,
                                nameYHCT: disease.nameYHCT
                            }],
                            isFavorite: false
                        };
                        remedyMap.set(remedy.id, remedyClone);
                        
                        remedy.ingredients.forEach(ing => allHerbs.add(ing.name));
                        allPatterns.add(remedy.pattern);
                    } else {
                        remedyMap.get(remedy.id).diseases.push({
                            id: disease.id,
                            name: disease.name,
                            nameYHCT: disease.nameYHCT
                        });
                    }
                });
            });
            
            allRemedies = Array.from(remedyMap.values());
            
            loadFavoritesFromStorage();
            
            document.getElementById('totalDiseases').textContent = diseasesData.length;
            document.getElementById('totalRemedies').textContent = allRemedies.length;
            document.getElementById('totalPatterns').textContent = allPatterns.size;
            document.getElementById('totalHerbs').textContent = allHerbs.size;
            document.getElementById('searchCount').textContent = allRemedies.length;
        }
            
        function initTabs() {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');
                    
                    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                    
                    this.classList.add('active');
                    document.getElementById(`${tabId}-tab`).classList.add('active');
                    
                    if (tabId === 'favorites') displayFavorites();
                    else if (tabId === 'statistics') updateStatistics();
                });
            });
        }

        function populateFilters() {
            const diseaseFilter = document.getElementById('diseaseFilter');
            const patternFilter = document.getElementById('patternFilter');
            
            diseasesData.forEach(disease => {
                const option = document.createElement('option');
                option.value = disease.name;
                option.textContent = `${disease.name}`;
                diseaseFilter.appendChild(option);
            });
            
            Array.from(allPatterns).sort().forEach(pattern => {
                const option = document.createElement('option');
                option.value = pattern;
                option.textContent = pattern;
                patternFilter.appendChild(option);
            });
        }

        // ==================== TÌM KIẾM & HIỂN THỊ ====================
        function searchRemedies() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
            const selectedDisease = document.getElementById('diseaseFilter').value;
            const selectedPattern = document.getElementById('patternFilter').value;
            
            let filteredRemedies = allRemedies;
            
            if (searchTerm) {
                filteredRemedies = filteredRemedies.filter(remedy => 
                    remedy.name.toLowerCase().includes(searchTerm) ||
                    remedy.pattern.toLowerCase().includes(searchTerm) ||
                    remedy.ingredients.some(ing => ing.name.toLowerCase().includes(searchTerm)) ||
                    remedy.diseases.some(d => d.name.toLowerCase().includes(searchTerm))
                );
            }
            
            if (selectedDisease) {
                filteredRemedies = filteredRemedies.filter(remedy => 
                    remedy.diseases.some(d => d.name === selectedDisease)
                );
            }
            
            if (selectedPattern) {
                filteredRemedies = filteredRemedies.filter(remedy => 
                    remedy.pattern === selectedPattern
                );
            }
            
            displayResults(filteredRemedies);
        }

        function showAll() {
            document.getElementById('searchInput').value = '';
            document.getElementById('diseaseFilter').value = '';
            document.getElementById('patternFilter').value = '';
            displayResults(allRemedies);
        }

        function toggleView(viewType) {
            currentView = viewType;
            
            document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            searchRemedies();
        }

        function displayResults(remediesToShow) {
            const container = document.getElementById('resultsContainer');
            const resultsCount = document.getElementById('resultsCount');
            const diseaseCount = document.getElementById('diseaseCount');
            
            if (remediesToShow.length === 0) {
                container.innerHTML = `
                    <div class="no-results">
                        <div class="no-results-icon">
                            <i class="fas fa-search"></i>
                        </div>
                        <h3>Không tìm thấy bài thuốc nào</h3>
                        <p>Hãy thử từ khóa tìm kiếm khác hoặc điều chỉnh bộ lọc</p>
                    </div>
                `;
                resultsCount.textContent = '0';
                diseaseCount.textContent = '0';
                return;
            }
            
            const uniqueDiseases = new Set();
            remediesToShow.forEach(remedy => {
                remedy.diseases.forEach(d => uniqueDiseases.add(d.name));
            });
            
            resultsCount.textContent = remediesToShow.length;
            diseaseCount.textContent = uniqueDiseases.size;
            document.getElementById('searchCount').textContent = remediesToShow.length;
            
            if (currentView === 'grouped') {
                displayGroupedResults(remediesToShow);
            } else {
                displayFlatResults(remediesToShow);
            }
        }

        function displayGroupedResults(remediesToShow) {
            const container = document.getElementById('resultsContainer');
            
            const diseasesWithRemedies = diseasesData
                .map(disease => {
                    const diseaseRemedies = remediesToShow.filter(remedy => 
                        remedy.diseases.some(d => d.id === disease.id)
                    );
                    
                    return {
                        ...disease,
                        remedies: diseaseRemedies
                    };
                })
                .filter(disease => disease.remedies.length > 0);
            
            let html = '';
            
            diseasesWithRemedies.forEach(disease => {
                html += `
                    <div class="disease-group">
                        <div class="disease-header">
                            <div class="disease-title">
                                <div class="disease-name">
                                    <i class="fas fa-heartbeat"></i>
                                    ${disease.name}
                                    <span class="disease-yhct">${disease.nameYHCT}</span>
                                </div>
                                <div class="disease-count">
                                    ${disease.remedies.length} bài
                                </div>
                            </div>
                        </div>
                        <div class="remedies-grid">
                `;
                
                disease.remedies.forEach(remedy => {
                    html += createRemedyCard(remedy, disease.id);
                });
                
                html += `
                        </div>
                    </div>
                `;
            });
            
            container.innerHTML = html;
        }

        function displayFlatResults(remediesToShow) {
            const container = document.getElementById('resultsContainer');
            
            let html = '<div class="remedies-grid">';
            
            remediesToShow.forEach(remedy => {
                html += createRemedyCard(remedy);
            });
            
            html += '</div>';
            container.innerHTML = html;
        }

        function createRemedyCard(remedy, diseaseId = null) {
            const diseaseNames = remedy.diseases
                .map(d => d.name)
                .join(', ');
            
            const ingredientTags = remedy.ingredients
                .slice(0, 3)
                .map(ing => `<span class="ingredient-tag">${ing.name}</span>`)
                .join('');
            
            const moreCount = remedy.ingredients.length > 3 ? 
                `<span class="ingredient-tag more">+${remedy.ingredients.length - 3}</span>` : '';
            
            return `
                <div class="remedy-card ${remedy.isFavorite ? 'featured' : ''}" data-id="${remedy.id}">
                    <div class="remedy-header">
                        <div class="remedy-name">
                            <i class="fas fa-prescription-bottle-alt"></i>
                            ${remedy.name}
                        </div>
                        <div class="pattern-badge">${remedy.pattern}</div>
                    </div>
                    
                    ${diseaseId ? '' : `
                        <div style="margin-bottom: 0.6rem; font-size: 0.8rem; color: var(--text-light);">
                            <i class="fas fa-heartbeat" style="margin-right: 4px;"></i>
                            ${diseaseNames}
                        </div>
                    `}
                    
                    <div class="ingredients-preview">
                        <div class="ingredients-title">
                            <i class="fas fa-seedling"></i>
                            Thành phần
                        </div>
                        <div class="ingredients-tags">
                            ${ingredientTags}${moreCount}
                        </div>
                    </div>
                    
                    <div class="usage">
                        <i class="fas fa-info-circle" style="margin-right: 4px;"></i>
                        ${remedy.usage}
                    </div>
                    
                    <div class="card-actions">
                        <button class="action-btn favorite-btn ${remedy.isFavorite ? 'active' : ''}" 
                                onclick="toggleFavorite(${remedy.id}, event)">
                            <i class="fas fa-heart"></i>
                            ${remedy.isFavorite ? 'Đã thích' : 'Thích'}
                        </button>
                        <button class="action-btn detail-btn" onclick="showDetail(${remedy.id})">
                            <i class="fas fa-eye"></i>
                            Chi tiết
                        </button>
                    </div>
                </div>
            `;
        }

        // ==================== YÊU THÍCH ====================
        function setFavoritesView(mode) {
            favoritesViewMode = mode;
            
            // Cập nhật active button
            document.querySelectorAll('#favorites-tab .view-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Cập nhật hiển thị
            displayFavorites();
        }

        function createCompactFavoriteCard(remedy) {
            const diseaseNames = remedy.diseases
                .map(d => d.name)
                .slice(0, 1) // Chỉ hiển thị 1 bệnh đầu tiên
                .join(', ');
            
            // Rút gọn tên thuốc nếu quá dài
            const displayName = remedy.name.length > 30 ? 
                remedy.name.substring(0, 28) + '...' : remedy.name;
            
            return `
                <div class="remedy-card compact ${remedy.isFavorite ? 'featured' : ''}" data-id="${remedy.id}">
                    <div class="remedy-header">
                        <div class="remedy-name" style="font-size: 0.9rem; margin-bottom: 0.3rem;">
                            <i class="fas fa-prescription-bottle-alt"></i>
                            ${displayName}
                        </div>
                        <div class="pattern-badge" style="font-size: 0.65rem; padding: 2px 6px;">${remedy.pattern}</div>
                    </div>
                    
                    <div style="font-size: 0.75rem; color: var(--text-light); margin-bottom: 0.5rem; line-height: 1.2;">
                        <i class="fas fa-heartbeat"></i> ${diseaseNames}
                    </div>
                    
                    <div class="ingredients-preview">
                        <div class="ingredients-tags" style="max-height: 40px; margin-bottom: 0.5rem;">
                            ${remedy.ingredients.slice(0, 3).map(ing => 
                                `<span class="ingredient-tag" style="font-size: 0.7rem; padding: 2px 6px;">${ing.name}</span>`
                            ).join('')}
                            ${remedy.ingredients.length > 3 ? 
                                `<span class="ingredient-tag more" style="font-size: 0.7rem; padding: 2px 6px;">+${remedy.ingredients.length - 3}</span>` : 
                                ''}
                        </div>
                    </div>
                    
                    <div class="card-actions" style="margin-top: auto;">
                        <button class="action-btn favorite-btn ${remedy.isFavorite ? 'active' : ''}" 
                                onclick="toggleFavorite(${remedy.id}, event)" 
                                style="padding: 0.4rem; font-size: 0.7rem; flex: 1;">
                            <i class="fas fa-heart"></i>
                            ${remedy.isFavorite ? 'Đã thích' : 'Thích'}
                        </button>
                        <button class="action-btn detail-btn" 
                                onclick="showDetail(${remedy.id})" 
                                style="padding: 0.4rem; font-size: 0.7rem; flex: 1;">
                            <i class="fas fa-eye"></i>
                            Chi tiết
                        </button>
                    </div>
                </div>
            `;
        }

        function displayFavorites() {
            const container = document.getElementById('favoritesContainer');
            const favoriteRemedies = allRemedies.filter(remedy => remedy.isFavorite);
            const favoritesTotal = document.getElementById('favoritesTotal');
            
            favoritesTotal.textContent = favoriteRemedies.length;
            
            if (favoriteRemedies.length === 0) {
                container.innerHTML = `
                    <div class="no-results" style="grid-column: 1 / -1;">
                        <div class="no-results-icon">
                            <i class="fas fa-heart"></i>
                        </div>
                        <h3>Chưa có bài thuốc yêu thích</h3>
                        <p>Hãy thích các bài thuốc bạn quan tâm để lưu lại ở đây</p>
                    </div>
                `;
                return;
            }
            
            let html = '';
            
            if (favoritesViewMode === 'grid') {
                // Chế độ lưới bình thường
                container.className = 'favorites-grid';
                html = '<div class="remedies-grid">';
                favoriteRemedies.forEach(remedy => {
                    html += createRemedyCard(remedy);
                });
                html += '</div>';
            } 
            else if (favoritesViewMode === 'compact') {
                // Chế độ dày đặc
                container.className = 'favorites-grid compact-mode';
                
                html = '<div class="remedies-grid">';
                favoriteRemedies.forEach(remedy => {
                    html += createCompactFavoriteCard(remedy);
                });
                html += '</div>';
            }
            
            container.innerHTML = html;
        }

        function toggleFavorite(id, event) {
            if (event) event.stopPropagation();
            
            const remedy = allRemedies.find(r => r.id === id);
            if (remedy) {
                remedy.isFavorite = !remedy.isFavorite;
                saveFavorites();
                updateFavoritesCount();
                
                if (event) {
                    const card = event.target.closest('.remedy-card');
                    const btn = event.target.closest('.favorite-btn');
                    
                    if (card) card.classList.toggle('featured');
                    if (btn) {
                        btn.classList.toggle('active');
                        btn.innerHTML = `<i class="fas fa-heart"></i> ${remedy.isFavorite ? 'Đã thích' : 'Thích'}`;
                    }
                }
                
                if (document.querySelector('[data-tab="favorites"]').classList.contains('active')) {
                    displayFavorites();
                }
            }
        }

        function clearAllFavorites() {
            if (confirm('Bạn có chắc muốn xóa tất cả bài thuốc yêu thích?')) {
                allRemedies.forEach(remedy => {
                    remedy.isFavorite = false;
                });
                saveFavorites();
                updateFavoritesCount();
                displayFavorites();
            }
        }

        // ==================== MODAL ====================
        function showDetail(id) {
            const remedy = allRemedies.find(r => r.id === id);
            if (!remedy) return;
            
            currentModalRemedyId = id;
            
            document.getElementById('modalTitle').textContent = remedy.name;
            document.getElementById('modalPattern').textContent = `Thể bệnh: ${remedy.pattern}`;
            document.getElementById('modalUsage').textContent = remedy.usage;
            
            const diseasesContainer = document.getElementById('modalDiseases');
            diseasesContainer.innerHTML = remedy.diseases
                .map(d => `<span class="disease-badge">${d.name} (${d.nameYHCT})</span>`)
                .join('');
            
            const ingredientsContainer = document.getElementById('modalIngredients');
            ingredientsContainer.innerHTML = remedy.ingredients
                .map(ing => `
                    <div class="ingredient-item">
                        <span class="ingredient-name">${ing.name}</span>
                        <span class="ingredient-weight">${ing.weight}</span>
                    </div>
                `)
                .join('');
            
            const favBtn = document.getElementById('modalFavoriteBtn');
            favBtn.innerHTML = remedy.isFavorite ? 
                '<i class="fas fa-heart"></i> Đã thích' : 
                '<i class="fas fa-heart"></i> Thêm vào yêu thích';
            
            document.getElementById('detailModal').classList.add('active');
        }

        function closeModal() {
            document.getElementById('detailModal').classList.remove('active');
        }

        // ==================== THỐNG KÊ ====================
        function updateStatistics() {
            document.getElementById('statTotalDiseases').textContent = diseasesData.length;
            document.getElementById('statTotalRemedies').textContent = allRemedies.length;
            document.getElementById('statTotalPatterns').textContent = allPatterns.size;
            document.getElementById('statTotalHerbs').textContent = allHerbs.size;
            
            const remedyUsage = {};
            diseasesData.forEach(disease => {
                disease.remedies.forEach(remedy => {
                    remedyUsage[remedy.name] = (remedyUsage[remedy.name] || 0) + 1;
                });
            });
            
            const topRemedy = Object.entries(remedyUsage).sort((a, b) => b[1] - a[1])[0];
            document.getElementById('topRemedy').textContent = topRemedy ? topRemedy[0] : '-';
            
            const patternCount = {};
            allRemedies.forEach(remedy => {
                patternCount[remedy.pattern] = (patternCount[remedy.pattern] || 0) + 1;
            });
            
            const topPattern = Object.entries(patternCount).sort((a, b) => b[1] - a[1])[0];
            document.getElementById('topPattern').textContent = topPattern ? topPattern[0] : '-';
            
            const herbCount = {};
            allRemedies.forEach(remedy => {
                remedy.ingredients.forEach(ing => {
                    herbCount[ing.name] = (herbCount[ing.name] || 0) + 1;
                });
            });
            
            const topHerb = Object.entries(herbCount).sort((a, b) => b[1] - a[1])[0];
            document.getElementById('topHerb').textContent = topHerb ? topHerb[0] : '-';
            
            const topHerbsList = document.getElementById('topHerbsList');
            const top5Herbs = Object.entries(herbCount)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5);
            
            topHerbsList.innerHTML = top5Herbs
                .map(([herb, count]) => `
                    <li>
                        <span>${herb}</span>
                        <span class="stat-item-value">${count} lần</span>
                    </li>
                `)
                .join('');
        }

        // ==================== LOCALSTORAGE ====================
        function saveFavorites() {
            const favorites = allRemedies.filter(r => r.isFavorite).map(r => r.id);
            localStorage.setItem('yhct_favorites', JSON.stringify(favorites));
        }

        function loadFavoritesFromStorage() {
            const savedFavorites = localStorage.getItem('yhct_favorites');
            
            if (savedFavorites) {
                const favoriteIds = JSON.parse(savedFavorites);
                
                favoriteIds.forEach(id => {
                    const remedy = allRemedies.find(r => r.id === id);
                    if (remedy) {
                        remedy.isFavorite = true;
                    }
                });
            }
        }

        function updateFavoritesCount() {
            const favCount = allRemedies.filter(r => r.isFavorite).length;
            document.getElementById('favCount').textContent = favCount;
        }

        // ==================== EVENT LISTENERS ====================
        function attachEventListeners() {
            document.getElementById('searchInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') searchRemedies();
            });
            
            document.getElementById('diseaseFilter').addEventListener('change', searchRemedies);
            document.getElementById('patternFilter').addEventListener('change', searchRemedies);
            
            document.getElementById('modalFavoriteBtn').addEventListener('click', function() {
                if (currentModalRemedyId) {
                    toggleFavorite(currentModalRemedyId);
                    const remedy = allRemedies.find(r => r.id === currentModalRemedyId);
                    this.innerHTML = remedy.isFavorite ? 
                        '<i class="fas fa-heart"></i> Đã thích' : 
                        '<i class="fas fa-heart"></i> Thêm vào yêu thích';
                }
            });
            
            document.getElementById('detailModal').addEventListener('click', function(e) {
                if (e.target === this) closeModal();
            });
            
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') closeModal();
            });
            
            document.querySelector('[data-tab="statistics"]').addEventListener('click', updateStatistics);
        }