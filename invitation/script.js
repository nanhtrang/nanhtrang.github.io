const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            name: '',
            time: '15:30',
            date: '2023-06-24',
            days: [
                'Chủ Nhật',
                'Thứ Hai',
                'Thứ Ba',
                'Thứ Tư',
                'Thứ Năm',
                'Thứ Sáu',
                'Thứ Bảy',
            ],
            lunarDay: [
                'ngày 07 tháng 05 năm Quý Mão',
                'ngày 08 tháng 05 năm Quý Mão'
            ],
            locationText: [
                'gia đình nhà trai', 'gia đình nhà gái'
            ],
            location: 'gia đình nhà gái',
            locationSelected: 1,
            locationDetail: [
                {
                    id: 0,
                    title: 'nhà trai',
                    text: 'gia đình nhà trai',
                    detail: 'Xóm 9, thôn Thụy Lũng Nam, xã Quốc Tuấn, huyện Kiến Xương, tỉnh Thái Bình'
                },
                {
                    id: 0,
                    title: 'nhà gái',
                    text: 'gia đình nhà gái',
                    detail: 'Số nhà 01, đường Thiều Hoa, khu 16, thị trấn Hùng Sơn, huyện Lâm Thao, tỉnh Phú Thọ'
                }
            ]
        }
    },
    mounted() {
        this.location = this.locationText[1]
    },

    // watch: {
    //     locationSelected
    // },

    methods: {
        getTime: function () {
            if (this.time) {
                return this.time.split(':')
            }
            return ['_', '_']
        },
        getDayOfWeek: function () {
            if (this.date === null) {
                return null
            }
            var date = new Date(this.date)
            return this.days[date.getDay()]
        },
        getDate: function () {
            if (this.date === null) {
                return null
            }
            const d = new Date(this.date)
            const date = d.getDate() > 10 ? d.getDate() : '0' + d.getDate().toString()
            const month = d.getMonth() > 10 ? d.getMonth() : '0' + d.getMonth().toString()
            return date + ' - ' + month + ' - ' + d.getFullYear()
        },
        getLunarDate: function () {
            if (this.date === null) {
                return null
            }
            if (this.date === '2023-06-24') {
                return this.lunarDay[0]
            } else if (this.date === '2023-06-25') {
                return this.lunarDay[1]
            } else {
                return null
            }
        },
        takeScreenShot: function () {
            const div = document.getElementById('content')
            html2canvas(div).then((canvas) => {
                canvas.toBlob(blob => {
                    const item = new ClipboardItem({ "image/png": blob });
                    navigator.clipboard.write([item])
                    this.showToast()
                })
            })
        },
        showToast: function () {
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
        }
    }
}).mount('#app')