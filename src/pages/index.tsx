import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import Courses, { type CourseItem } from '@site/src/data/courses'
import Course from '../components/Course'

import Heading from '@theme/Heading'
import Translate, { translate } from '@docusaurus/Translate'

import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  )
}

function TimetablesAnnouncement() {
  return (
    <div
      className={clsx(styles.announcement, styles.announcementDark)}
      data-theme="dark"
    >
      <div className={styles.announcementInner}>
        <Link className="button button--primary button--lg" to="/docs/intro">
          Acessar Quadro de Horários
        </Link>
      </div>
    </div>
  )
}

function CourseSection() {
  const courseColumns: CourseItem[][] = [[], [], []]
  Courses.filter((course) => course.showOnHomepage).forEach((course, i) =>
    courseColumns[i % 3]!.push(course),
  )

  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={clsx('margin-bottom--lg', 'text--center')}>
          <h2>Acesso rápido aos iniciante</h2>
        </Heading>
        <div className={clsx('row', styles.coursesSection)}>
          {courseColumns.map((courseItems, i) => (
            <div className="col col--4" key={i}>
              {courseItems.map((course) => (
                <Course {...course} key={course.url} />
                // <div>course.name</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <TimetablesAnnouncement />
        <HomepageFeatures />
        {/* <CourseSection /> */}
      </main>
    </Layout>
  )
}
