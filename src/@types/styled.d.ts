// Aqui, a biblioteca styled-components é importada. Além disso, há uma importação do objeto defaultTheme
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// O tipo ThemeType é definido como sendo o tipo do objeto defaultTheme. Isso significa que ThemeType possui a mesma estrutura (tipagem) que o objeto defaultTheme.
type ThemeType = typeof defaultTheme

/* 
  Esta parte está relacionada ao sistema de módulos do TypeScript. 
  Ela declara um novo módulo para a biblioteca styled-components sobrescrevendo o original. 
  Dentro desse módulo, está sendo estendida a interface DefaultTheme da biblioteca styled-components, e ela é configurada para ter a mesma estrutura que o ThemeType que é o tipo do defaultTheme.
  Isso é útil para que o TypeScript entenda que o tema padrão (definido em defaultTheme) está sendo utilizado com o styled-components, e, assim, forneça autocompletar e verificação de tipos adequadas durante o desenvolvimento.
*/
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
