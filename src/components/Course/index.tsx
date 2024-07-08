import React, { type ReactNode } from 'react'

import clsx from 'clsx'

import Link from '@docusaurus/Link'
import styles from './styles.module.css'

export interface Props {
  url: string
  name: string
  acronym: string
  //   color: string;
}

export default function Course({
  url,
  name,
  acronym,
}: // color,
Props) {
  return (
    <div className={clsx('card', styles.course)}>
      <div className="card__header">
        <div className="avatar">
          <div className={clsx('avatar__intro', styles.courseMeta)}>
            <strong className="avatar__name">{acronym}</strong>
          </div>
        </div>
      </div>

      <div className={clsx('card__body', styles.course)}>{name}</div>

      <div className="card__footer">
        <Link className={clsx(styles.courseMeta, styles.courseDate)} to={url}>
          {acronym}
        </Link>
      </div>
    </div>
  )
}
