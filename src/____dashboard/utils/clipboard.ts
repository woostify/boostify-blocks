/**
 * Universal clipboard helper supporting modern Clipboard API with HTTP (*.local)
 * execCommand fallback kept safely inside an active FocusTrap container.
 */
function copyTextViaExecCommand(text: string, focusContainer?: HTMLElement | null): boolean {
	const textarea = document.createElement("textarea");
	textarea.value = text;
	textarea.setAttribute("readonly", "");
	textarea.style.position = "fixed";
	textarea.style.top = "-9999px";
	textarea.style.left = "-9999px";
	textarea.style.opacity = "0";

	const host = focusContainer || document.body;
	host.appendChild(textarea);

	const previousActive = document.activeElement as HTMLElement | null;
	textarea.focus({ preventScroll: true });
	textarea.select();
	textarea.setSelectionRange(0, text.length);

	let copied = false;
	try {
		copied = document.execCommand("copy");
	} catch {
		copied = false;
	}

	host.removeChild(textarea);
	if (previousActive && typeof previousActive.focus === "function") {
		previousActive.focus({ preventScroll: true });
	}
	return copied;
}

export async function copyTextToClipboard(
	text: string,
	focusContainer?: HTMLElement | null
): Promise<boolean> {
	if (
		typeof navigator !== "undefined" &&
		navigator.clipboard &&
		typeof navigator.clipboard.writeText === "function"
	) {
		try {
			await navigator.clipboard.writeText(text);
			return true;
		} catch {
			// Fall through to execCommand fallback (required on non-HTTPS local sites).
		}
	}

	return copyTextViaExecCommand(text, focusContainer);
}
