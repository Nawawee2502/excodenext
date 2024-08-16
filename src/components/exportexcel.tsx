import React, { useState } from 'react';
import * as XLSX from 'xlsx';

declare module 'xlsx' {
    interface Utils {
        merge_range(sheet: any, range: string): void;
    }
}

const ExportExcel: React.FC = () => {
    const [branch, setBranch] = useState<string>('');

    // ข้อมูลตัวอย่างที่จะถูกแสดงในตาราง
    const data = [
        { "ลำดับที่": 1, "รหัสสินค้า": "P001", "สินค้า": "สินค้า A", "จำนวน": 50 },
        { "ลำดับที่": 2, "รหัสสินค้า": "P002", "สินค้า": "สินค้า B", "จำนวน": 30 },
        { "ลำดับที่": 3, "รหัสสินค้า": "P003", "สินค้า": "สินค้า C", "จำนวน": 20 },
        { "ลำดับที่": 4, "รหัสสินค้า": "P004", "สินค้า": "สินค้า D", "จำนวน": 15 },
        { "ลำดับที่": 5, "รหัสสินค้า": "P005", "สินค้า": "สินค้า E", "จำนวน": 40 },
        { "ลำดับที่": 6, "รหัสสินค้า": "P006", "สินค้า": "สินค้า F", "จำนวน": 25 },
    ];

    // ฟังก์ชันสำหรับการ Export ข้อมูลเป็น Excel
    const exportToExcel = () => {
        // คำนวณรวม
        const total = data.reduce((sum, item) => sum + item["จำนวน"], 0);

        // สร้างข้อมูลสำหรับชีท
        const branchInfo = [
            ["สรุปรายงานใบสั่งสินค้าจากสาขาไป Warehouse"],
            ["วันที่ ถึง วันที่"],
            [`สาขา: ${branch}`],
            ["ลำดับที่", "รหัสสินค้า", "สินค้า", "จำนวน"]
        ];

        // ข้อมูลสินค้า
        const dataRows = data.map(item => [item["ลำดับที่"], item["รหัสสินค้า"], item["สินค้า"], item["จำนวน"]]);

        // ข้อมูลรวม
        const totalRow = ['', '', 'รวม', total];

        // รวมข้อมูลทั้งหมด
        const allData = [...branchInfo, ...dataRows, [], totalRow];

        // สร้าง worksheet จากข้อมูลทั้งหมด
        const worksheet = XLSX.utils.aoa_to_sheet(allData);

        worksheet['!merges'] = [
            { s: { c: 0, r: 0 }, e: { c: 3, r: 0 } }, // รวม A1 ถึง D1
            { s: { c: 0, r: 1 }, e: { c: 3, r: 1 } }, // รวม A2 ถึง D2
            { s: { c: 0, r: 2 }, e: { c: 3, r: 2 } }, // รวม A3 ถึง D3
        ];

        // ตั้งค่าการจัดตำแหน่งกลางสำหรับ A1, A2 และ A4:D4
        worksheet['A1'].s = {
            alignment: { horizontal: 'center', vertical: 'center' },
            font: { bold: true }
        };

        worksheet['A2'].s = {
            alignment: { horizontal: 'center', vertical: 'center' }
        };

        worksheet['A3'].s = {
            alignment: { horizontal: 'center', vertical: 'center' },
            font: { bold: true }
        };

        // สร้าง workbook ใหม่
        const workbook = XLSX.utils.book_new();

        // เพิ่มข้อมูลไปยัง workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');

        // บันทึกไฟล์ Excel
        XLSX.writeFile(workbook, 'report.xlsx');
    };

    return (
        <div>
            <h2>รายงานใบสั่งสินค้าจากสาขาไป Warehouse</h2>
            <label>
                สาขา:
                <input
                    type="text"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    placeholder="กรอกชื่อสาขา"
                />
            </label>
            <br /><br />
            <table border={1}>
                <thead>
                    <tr>
                        <th>ลำดับที่</th>
                        <th>รหัสสินค้า</th>
                        <th>สินค้า</th>
                        <th>จำนวน</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row["ลำดับที่"]}</td>
                            <td>{row["รหัสสินค้า"]}</td>
                            <td>{row["สินค้า"]}</td>
                            <td>{row["จำนวน"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <button onClick={exportToExcel}>Export to Excel</button>
        </div>
    );
};

export default ExportExcel;
