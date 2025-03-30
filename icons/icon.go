//go:generate go run ./generate/main.go
package icons

import (
	"context"
	"io"
	"strconv"

	r "github.com/canpacis/pacis-ui/renderer"
)

func join(props []r.I, rest ...r.I) []r.I {
	return append(rest, props...)
}

type Width float64

func (Width) GetKey() string {
	return "width"
}

func (wd Width) GetValue() any {
	return float64(wd)
}

// Implements Deduper interface to deduplicate attribute
// and use the last provided value as the final attribte
func (Width) Dedupe() {}

func (wd Width) Render(ctx context.Context, w io.Writer) error {
	_, err := w.Write([]byte(strconv.FormatFloat(float64(wd), 'f', -1, 64)))
	return err
}

type Height float64

func (Height) GetKey() string {
	return "height"
}

func (wd Height) GetValue() any {
	return float64(wd)
}

// Implements Deduper interface to deduplicate attribute
// and use the last provided value as the final attribte
func (Height) Dedupe() {}

func (wd Height) Render(ctx context.Context, w io.Writer) error {
	_, err := w.Write([]byte(strconv.FormatFloat(float64(wd), 'f', -1, 64)))
	return err
}

type StrokeWidth float64

func (StrokeWidth) GetKey() string {
	return "stroke-width"
}

func (wd StrokeWidth) GetValue() any {
	return float64(wd)
}

// Implements Deduper interface to deduplicate attribute
// and use the last provided value as the final attribte
func (StrokeWidth) Dedupe() {}

func (wd StrokeWidth) Render(ctx context.Context, w io.Writer) error {
	_, err := w.Write([]byte(strconv.FormatFloat(float64(wd), 'f', -1, 64)))
	return err
}

func Fill(fill string) r.Attribute {
	return r.Attr("fill", fill)
}

func Stroke(fill string) r.Attribute {
	return r.Attr("stroke", fill)
}

type SvgIcon struct {
	r.Element
}

func Icon(props ...r.I) SvgIcon {
	props = join(props,
		Width(24),
		Height(24),
		StrokeWidth(2),
		Fill("none"),
		Stroke("currentColor"),
		r.Attr("viewBox", "0 0 24 24"),
		r.Attr("stroke-linecap", "round"),
		r.Attr("stroke-linejoin", "round"),
	)
	return SvgIcon{Element: r.El("svg", props...)}
}
