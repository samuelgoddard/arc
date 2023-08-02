export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.33, ease: [0.71,0,0.17,1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.33, ease: [0.71,0,0.17,1] }
	}
}

export const fadeGrain = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { delay: 5, duration: 0.33, ease: [0.71,0,0.17,1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.33, ease: [0.71,0,0.17,1] }
	}
}