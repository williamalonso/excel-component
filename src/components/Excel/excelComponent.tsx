import React from 'react';
import Image from "next/image";
import ReactExport from 'react-data-export';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

interface ExportToExcelButtonProps {
  data?: any | undefined;
  fileName?: string | undefined;
  sheetName?: string | undefined;
  columns?: { label: string; value: string }[] | undefined;
}

const exportButtonElement = (
  <div className="container mx-auto flex justify-end items-center my-4">
    <div className="flex rounded-[30px] bg-[#f5f5f5] w-40 h-12 items-center  text-[18px] font-medium cursor-pointer
    shadow-[0_4px_6px_-1px_rgba(0,0,0,.1),0_2px_4px_-1px_rgba(0,0,0,.06)] justify-evenly">
      <span className="text-[#2587e1] bg-[#f5f5f5]">Exportar</span>
      <Image src="/images/vectorExcelArrow.svg" alt="Seta de download com ícone para cima" width={22} height={22} className="bg-[#f5f5f5]" />
    </div>
  </div>
);

const ExportToExcelButton: React.FC<ExportToExcelButtonProps> = ({ data, fileName, sheetName, columns }) => {

  return (
    <ExcelFile 
      element={exportButtonElement} 
      filename={fileName} 
      className="export-button"
    >
      { data && columns  && (
        <ExcelSheet data={data} name={sheetName}>
          { columns.map((column) => (
            <ExcelColumn key={column.value} label={column.label} value={column.value} />
          ))}
        </ExcelSheet>
      )}
    </ExcelFile>
  );
};

export default ExportToExcelButton;