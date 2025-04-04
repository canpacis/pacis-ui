package components

import h "github.com/canpacis/pacis/ui/html"

func Label(props ...h.I) h.Element {
	props = Join(props, h.Class("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block"))
	return h.Lbl(props...)
}
