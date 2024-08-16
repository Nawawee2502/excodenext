import React from 'react';
import jsPDF from 'jspdf';

const DynamicForm: React.FC = () => {
    const generateForm = () => {
        // สร้างฟอร์มใน DOM ตามตัวอย่างเดิม หรือข้ามไปได้
    };

    React.useEffect(() => {
        generateForm();
    }, []);

    const generatePDF = () => {
        const doc = new jsPDF();

        doc.text("Hello world!", 10, 10);
        doc.text("This is a dynamically generated PDF.", 10, 20);

        doc.save("generated.pdf");
    };

    return (
        <div id="form-container">
            <button onClick={generatePDF}>Download PDF</button>
        </div>
    );
};

export default DynamicForm;
