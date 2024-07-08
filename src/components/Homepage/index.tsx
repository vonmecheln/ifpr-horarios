import clsx from 'clsx'
import React from 'react'
import { Container } from './styles'
import styles from './styles.module.css'
import Image from '@site/static/img/img1.svg'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  // eslint-disable-next-line no-undef
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Fácil de usar',
    Svg: require('../../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        O horário foi projetado desde o início para ser facilmente visualizado e
        usado por alunos, professores e toda comunidade.
      </>
    ),
  },
  {
    title: 'Foco na praticidade',
    Svg: require('../../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        O horário é focado na praticidade para consulta do dia-a-dia. Verifique
        a distribuição de aulas por <code>turmas</code>,<code>professores</code>{' '}
        e <code>cursos</code>.
      </>
    ),
  },
  {
    title: 'Produzido pelo IFPR',
    Svg: require('../../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Um trabalho feito em equipe por docentes do campus Assis Chateaubriand
        com muito esmero e carinho.
      </>
    ),
  },
  {
    title: 'Melhorias constantes',
    Svg: require('../../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        O horário está em constante melhoria, adaptando-se da melhor maneira as
        mudanças de rotina do campus .
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        {/* {<Image/>} */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export function Homepage() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}

// export function Homepage() {
//   return (
//     <Container>
//       <h1>Para visualizar o novo horário:</h1>
//       <button>
//         <a href="docs/intro/">Clique aqui</a>
//       </button>
//     </Container>
//   )
// }
