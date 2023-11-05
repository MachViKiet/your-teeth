
import Header from '~/components/Home/Header/Header'

function HomeLayout(progs) {

  return (
    <div>
      <Header />
      {progs.children}
    </div>
  )
}

export default HomeLayout