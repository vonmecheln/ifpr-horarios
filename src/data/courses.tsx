/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable @docusaurus/no-untranslated-text */

import React from 'react';

import type {Props as Course} from '../components/Course';

export type CourseItem = Course & {

    showOnHomepage: boolean;

};

const COURSES: CourseItem[] = [
  {
    url: 'http://localhost:3000/ifpr-horarios/docs/turma/ago2023',
    name: 'Técnico em Agropecuária Integrado ao ensino Médio',
    acronym: "AGO2023",
    showOnHomepage: true,
  },
  {
    url: 'http://localhost:3000/ifpr-horarios/docs/turma/com2023',
    name: 'Técnico em Comércio Integrado ao Ensino Médio',
    acronym: "COM2023",
    showOnHomepage: true,
  },
  {
    url: 'http://localhost:3000/ifpr-horarios/docs/turma/ein2023',
    name: 'Técnico em Eletromecânica Integrado ao Ensino Médio',
    acronym: "EIN023",
    showOnHomepage: true,
  },
  {
    url: 'http://localhost:3000/ifpr-horarios/docs/turma/iiw2023a',
    name: 'Técnico em Informática para Internet Integrado ao Ensino Médio',
    acronym: "IIW2023A",
    showOnHomepage: true,
  },
  {
    url: 'http://localhost:3000/ifpr-horarios/docs/turma/iiw2023b',
    name: 'Técnico em Informática para Internet Integrado ao Ensino Médio',
    acronym: "IIW2023B",
    showOnHomepage: true,
  },
];

export default COURSES;