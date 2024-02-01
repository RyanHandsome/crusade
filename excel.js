import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs';

const filePath = path.resolve(process.cwd(), 'subscribers.xlsx');

export async function addEmailToExcel(email) {
    const workbook = new ExcelJS.Workbook();

    if (fs.existsSync(filePath)) {
        await workbook.xlsx.readFile(filePath);
    }

    let worksheet = workbook.getWorksheet('Subscribers');
    if (!worksheet) {
        worksheet = workbook.addWorksheet('Subscribers');
    }

    if (!worksheet.columns || worksheet.columns.length === 0) {
        worksheet.columns = [
            { header: 'Email', key: 'email', width: 30 },
        ];
    }

    worksheet.addRow({ email });

    await workbook.xlsx.writeFile(filePath);
}