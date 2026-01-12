
gsap.registerPlugin(TextPlugin)

gsap.registerPlugin(SplitText);

let animation;
let split = SplitText.create("#welcome", { type: "chars" });
let hwc = document.getElementById("audio"); 
let file_click = document.getElementById("file_click")
function profitttheme() {
	hwc.play();
	setTimeout(() => {
	file_click.play();
	}, 5000);
}

let tl = gsap.timeline();
tl.to("#line1", { duration: 1, text: "HWAC Public Access Portal v2026.01", ease: "none" })
	.to("#line2", { duration: 1, text: "[info] Establishing connection", ease: "none" })
	.to("#dots1", { duration: 3, text: "...", ease: "none" })
	.to("#line2a", { duration: 0.25, text: "OK!", ease: "none", delay: 1 })
	.to("#line3", { duration: 1, text: "[info] Connecting to database archive", ease: "none", delay: 0.5 })
	.to("#dots2", { duration: 3, text: "...", ease: "none" })
	.to("#line3a", { duration: 0.1, text: "OK!", ease: "none", delay: 1 })
	.to("#line4", { duration: 1, text: "[info] Initialising experience", ease: "none", delay: 0.5 })
	.to("#dots3", { duration: 4, text: "....", ease: "none" })
	.from(split.chars, {
		x: 150,
		opacity: 0,
		duration: 0.7,
		ease: "power4",
		stagger: 0.04,
		delay: 0.5
	})
	.call(profitttheme, null, "<")
	.to("#terminal", {duration: 0.7, opacity: 0}, '<')
	.to(split.chars, {
		x: -150,
		opacity: 0,
		duration: 0.7,
		ease: "power4",
		stagger: 0.04,
		delay: 1.5
	})
	.to("#background", { duration: 2.5, opacity: 1, ease: "in"}, '<')
	.to("#timeline", { duration: 0.5, opacity: 1, ease: "none", delay: 1}, '<')
	.to("#controls", { duration: 0.125, top: 0, ease: "none"}, '<')
	.to("#timeline_container", { duration: 0, overflowY: "auto"})
	.to("#timeline_container", { duration: 0, scrollbarWidth: "0px"})
