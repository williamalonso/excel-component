import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import ExportToExcelButton from '@/components/Excel/excelComponent';

const Datatable = () => {

  const dataValues = [
    {
      sobremesa: "Iogurte congelado",
      calorias: "159",
      gordura: "6",
      carboidratos: "24",
      proteina: "4",
    },
    {
      sobremesa: "Sanduíche de sorvete",
      calorias: "237",
      gordura: "9",
      carboidratos: "37",
      proteina: "4,3",
    },
    {
      sobremesa: "Bomba de chocolate",
      calorias: "262",
      gordura: "16",
      carboidratos: "24",
      proteina: "6",
    },
    {
      sobremesa: "Cupcake",
      calorias: "305",
      gordura: "3,7",
      carboidratos: "67",
      proteina: "4,3",
    },
    {
      sobremesa: "Pão de gengibre",
      calorias: "356",
      gordura: "16",
      carboidratos: "49",
      proteina: "3,9",
    },
  ];

  const dataColumns = [
    { label: "Sobremesa (porção de 100g)", value: "sobremesa" },
    { label: "Calorias", value: "calorias" },
    { label: "Gordura (g)", value: "gordura" },
    { label: "Carboidratos (g)", value: "carboidratos" },
    { label: "Proteína (g)", value: "proteina" },
  ];

  return (
    <div className='container mx-auto mt-[50px]'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              { dataColumns.map(column => (
                  <TableCell key={column.value} className='bg-tableBgColor text-tableTxtColor'>
                      { column.label }
                  </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            { dataValues.map((data) => (
              <TableRow
                key={data.sobremesa}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" scope="row" className='bg-tableBgColor text-tableTxtColor'>
                  {data.sobremesa}
                </TableCell>
                <TableCell align="left" className='bg-tableBgColor text-tableTxtColor'>
                  {data.calorias}
                </TableCell>
                <TableCell align="left" className='bg-tableBgColor text-tableTxtColor'>
                  {data.gordura}
                </TableCell>
                <TableCell align="left" className='bg-tableBgColor text-tableTxtColor'>
                  {data.carboidratos}
                </TableCell>
                <TableCell align="left" className='bg-tableBgColor text-tableTxtColor'>
                  {data.proteina}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ExportToExcelButton 
        dataValues={dataValues} 
        fileName={`Tabela excel`}
        sheetName={`Dados`}
        columns={dataColumns}
      />
    </div>
  );
}
 
export default Datatable;