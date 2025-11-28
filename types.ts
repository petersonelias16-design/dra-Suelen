import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface TestimonialItem {
  id: string;
  name: string;
  text: string;
  treatment: string;
}

export interface NavLink {
  name: string;
  href: string;
}