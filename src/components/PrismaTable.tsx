import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { PrismaTable } from '@paljs/admin/PrismaTable';

interface TableProps {
  model: string;
}
const Table = ({ model }: TableProps) => {
  const router = useRouter();

  // then pass here
  const PrismaTableStyled = styled(PrismaTable)`
    td {
      max-width: 12rem;
    }
  `;

  return <PrismaTableStyled model={model} push={router.push} query={router.query} />;
};
export default Table;
