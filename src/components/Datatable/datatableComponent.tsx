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

  const excelData = [
    { dessert: 'Iogurte congelado',
      iceCream: 'Sanduíche de sorvete'
    },
  ];
    

  const columnsExcelData = [
    { label: 'Sobremesa (porção de 100g)', value: 'dessert'},
    { label: 'Calorias', value: 'iceCream'}
  ];

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Iogurte congelado', 159, 6.0, 24, 4.0),
    createData('Sanduíche de sorvete', 237, 9.0, 37, 4.3),
    createData('Bomba de chocolate', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Pão de gengibre', 356, 16.0, 49, 3.9),
  ];

  return (
    <div className='container mx-auto mt-[50px]'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className='bg-tableBgColor text-tableTxtColor'>Sobremesa (porção de 100g)</TableCell>
              <TableCell align="right" className='bg-tableBgColor text-tableTxtColor'>Calorias</TableCell>
              <TableCell align="right" className='bg-tableBgColor text-tableTxtColor'>Gordura&nbsp;(g)</TableCell>
              <TableCell align="right" className='bg-tableBgColor text-tableTxtColor'>Carboidratos&nbsp;(g)</TableCell>
              <TableCell align="right" className='bg-tableBgColor text-tableTxtColor'>Proteína&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" className='bg-tableBgColor text-tableTxtColor'>
                  {row.name}
                </TableCell>
                <TableCell align="right" className='bg-tableBgColor text-tableTxtColor'>{row.calories}</TableCell>
                <TableCell align="right" className='bg-tableBgColor text-tableTxtColor'>{row.fat}</TableCell>
                <TableCell align="right" className='bg-tableBgColor text-tableTxtColor'>{row.carbs}</TableCell>
                <TableCell align="right" className='bg-tableBgColor text-tableTxtColor'>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ExportToExcelButton 
        data={excelData} 
        fileName={`Tabela_Excel_2024`}
        sheetName={`Mes`}
        columns={columnsExcelData}
      />
    </div>
  );
}
 
export default Datatable;