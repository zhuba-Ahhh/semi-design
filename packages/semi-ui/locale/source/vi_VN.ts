import { vi } from 'date-fns/locale';
import { Locale } from '../interface';

const local: Locale = {
    code: 'vi-VN',
    dateFnsLocale: vi,
    Pagination: {
        pageSize: '${pageSize} Số / trang',
        total: 'Tổng cộng ${total} Số trang',
        jumpTo: 'Chuyển đến',
        page: ' Số trang',
    },
    Modal: {
        confirm: 'Xác nhận',
        cancel: 'Huỷ bỏ',
    },
    TimePicker: {
        placeholder: {
            time: 'Chọn thời gian',
            timeRange: 'Chọn một phạm vi thời gian',
        },
        begin: 'Thời gian bắt đầu',
        end: 'Thời gian kết thúc',
        // hour: 'giờ',
        // minute: 'phút',
        // second: 'thứ hai',
        hour: '',
        minute: '',
        second: '',
        AM: 'buổi sáng',
        PM: 'vào buổi chiều',
    },
    DatePicker: {
        placeholder: {
            date: 'Chọn ngày',
            dateTime: 'Chọn ngày và giờ',
            dateRange: ['Ngày bắt đầu', 'Ngày kết thúc'],
            dateTimeRange: ['Ngày bắt đầu', 'Ngày kết thúc'],
        },
        footer: {
            confirm: 'Xác nhận',
            cancel: 'Huỷ bỏ',
        },
        selectDate: 'Quay lại ngày đã chọn',
        selectTime: 'thời gian lựa chọn',
        year: 'năm',
        month: 'tháng',
        day: 'ngày',
        monthText: '${month} ${year}',
        months: {
            1: 'Giêng',
            2: 'hai',
            3: 'Ba',
            4: 'tư',
            5: 'có thể',
            6: 'sáu',
            7: 'bảy',
            8: 'Tám',
            9: 'Chín',
            10: 'Mười',
            11: 'mười một',
            12: 'mười hai',
        },
        fullMonths: {
            1: 'tháng Giêng',
            2: 'Tháng hai',
            3: 'tháng Ba',
            4: 'Tháng tư',
            5: 'có thể',
            6: 'Tháng sáu',
            7: 'Tháng bảy',
            8: 'Tháng Tám',
            9: 'Tháng Chín',
            10: 'Tháng Mười',
            11: 'Tháng mười một',
            12: 'Tháng mười hai',
        },
        weeks: {
            Mon: 'Thứ hai',
            Tue: 'Thứ ba',
            Wed: 'Thứ tư',
            Thu: 'Thứ năm',
            Fri: 'Thứ sáu',
            Sat: 'ngày thứ bảy',
            Sun: 'chủ nhật',
        },
        localeFormatToken: {
            FORMAT_SWITCH_DATE: 'yyyy-MM-dd',
        },
    },
    Popconfirm: {
        confirm: 'Xác nhận',
        cancel: 'Huỷ bỏ',
    },
    Navigation: {
        collapseText: 'Thu gọn Thanh bên',
        expandText: 'Mở rộng Thanh bên',
    },
    Table: {
        emptyText: 'Không kết quả',
        pageText: 'Hiển thị ${currentStart} đến ${currentEnd} trong tổng số ${total}}',
    },
    Select: {
        emptyText: 'Không kết quả',
        createText: 'Tạo nên',
    },
    Tree: {
        emptyText: 'Không kết quả',
        searchPlaceholder: 'Tìm kiếm',
    },
    Cascader: {
        emptyText: 'Không kết quả',
    },
    List: {
        emptyText: 'Không kết quả',
    },
    Calendar: {
        allDay: 'Cả ngày',
        AM: 'buổi sáng ${time}',
        PM: 'vào buổi chiều ${time}',
        datestring: '',
        remaining: '${remained} mặt hàng',
    },
    Upload: {
        mainText: 'Nhấp để Tải tệp lên hoặc Kéo tệp vào đây',
        illegalTips: 'Loại tệp này không được hỗ trợ',
        legalTips: 'Phát hành và bắt đầu tải lên',
        retry: 'Thử lại',
        replace: 'Thay thế tệp',
        clear: 'rõ ràng',
        selectedFiles: 'Tệp đã chọn',
        illegalSize: 'Kích thước tệp không hợp lệ',
        fail: 'Tải lên không thành công',
    },
    TreeSelect: {
        searchPlaceholder: 'Tìm kiếm',
    },
    Typography: {
        copy: 'Sao chép',
        copied: 'Đã sao chép',
        expand: 'Mở rộng',
        collapse: 'Thu gọn',
    },
    Transfer: {
        emptyLeft: 'Không có dữ liệu',
        emptySearch: 'Không có kết quả tìm kiếm',
        emptyRight: 'Không có nội dung, kiểm tra từ bên trái',
        placeholder: 'Tìm kiếm',
        clear: 'Clear',
        selectAll: 'Thông thoáng',
        clearSelectAll: 'Bỏ chọn tất cả',
        total: 'Tổng số ${total} mặt hàng',
        selected: '${total} mục được chọn',
    },
    Form: {
        optional: '(không bắt buộc)',
    },
    Image: {
        preview: 'xem trước',
        loading: 'Đang tải',
        loadError: 'Không tải được',
        prevTip: 'Trước đó',
        nextTip: 'Next',
        zoomInTip: 'Phóng to',
        zoomOutTip: 'thu nhỏ',
        rotateTip: 'Xoay',
        downloadTip: 'download',
        adaptiveTip: 'Thích ứng với trang',
        originTip: 'Kích thước ban đầu',
    },
};

// [i18n-Vietnam] 越南语
export default local;
