package hello

import
(
	"fmt"
	"net/http"
)

// run before app starts serving
func init()
{
	// request handler, paths handled by function.
	http.HandleFunc("/hello", helloHandler)
}

func helloHandler(w http.ResponseWriter, r *http.Request)
{
	fmt.Fprintln(w, "Hello - Go app")
}
