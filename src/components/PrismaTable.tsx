import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { PrismaTable } from '@paljs/admin/PrismaTable';

const Table = (model: string) => {
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
