'use client';

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs';

export default function StaticImagesBreadcrumb() {
  return (
    <Breadcrumbs variant='solid'>
      <BreadcrumbItem href='/'>Home</BreadcrumbItem>
      <BreadcrumbItem>Static Images</BreadcrumbItem>
    </Breadcrumbs>
  );
}
