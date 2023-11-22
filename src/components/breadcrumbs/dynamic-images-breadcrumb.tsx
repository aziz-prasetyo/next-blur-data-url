'use client';

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs';

export default function DynamicImagesBreadcrumb() {
  return (
    <Breadcrumbs variant='solid'>
      <BreadcrumbItem href='/'>Home</BreadcrumbItem>
      <BreadcrumbItem>Dynamic Images</BreadcrumbItem>
    </Breadcrumbs>
  );
}
