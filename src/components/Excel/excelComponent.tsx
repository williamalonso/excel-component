import React from 'react';
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

const ExportToExcelButton: React.FC<ExportToExcelButtonProps> = ({ data, fileName, sheetName, columns }) => {

  return (
    <ExcelFile 
      element={
        <span className="text-[#2587e1] bg-[#f5f5f5]">Exportar</span>
      } 
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