
// @GENERATOR:play-routes-compiler
// @SOURCE:/home/estudiantelis/Empresariales/Dojo-Scala/scala/conf/routes
// @DATE:Sat Oct 08 12:06:33 COT 2016


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
