import React from 'react';
import Image from "next/image";
import ReactExport from 'react-data-export';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

interface ExportToExcelButtonProps {
  dataValues?: {
    sobremesa: string;
    calorias: string;
    gordura: string;
    carboidratos: string;
    proteina: string;
  }[];
  fileName?: string;
  sheetName?: string;
  columns?: { label: string; value: string }[];
}

const ExportToExcelButton: React.FC<ExportToExcelButtonProps> = ({ dataValues, fileName, sheetName, columns }) => {

  const exportButtonElement = (
    <div className="flex rounded-[30px] bg-[#f5f5f5] w-40 h-12 items-center  text-[18px] font-medium cursor-pointer
    shadow-[0_4px_6px_-1px_rgba(0,0,0,.1),0_2px_4px_-1px_rgba(0,0,0,.06)] justify-evenly">
      <span className="text-[#2587e1] bg-[#f5f5f5]">Exportar</span>
      <Image src="/images/vectorExcelArrow.svg" alt="Seta de download com ícone para cima" width={22} height={22} className="bg-[#f5f5f5]" />
    </div>
  );

  return (
    <ExcelFile element={exportButtonElement} filename={fileName} >
      { dataValues && columns && (
        <ExcelSheet data={dataValues} name={sheetName}>
          { 
            columns.map((column) => (
              <ExcelColumn key={column.value} label={column.label} value={column.value} />
            ))
          }
        </ExcelSheet>
      )}
    </ExcelFile>
  );
}
 
export default ExportToExcelButton;