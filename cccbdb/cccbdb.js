const target = '[title="Vibrational symmetries, frequencies, and intensities"]';
let node = document.querySelector(target);
if (node) {
    let rows = node.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    let frequencies = new Array(0);
    for (let i = 2; i < rows.length; i++) {
	let row = rows[i].getElementsByTagName("td");
	let sym = row[1].innerHTML.replace(/<\/?sub>/g, "");
	let freq = row[2].innerHTML;
	frequencies.push({"sym": sym, "freq": freq});
    }

    frequencies.sort((a, b) => {return b.freq - a.freq});

    let output = new Array(0);
    for (let i = 0; i < frequencies.length; i++) {
	output.push(`${frequencies[i].sym} ${frequencies[i].freq}`);
    }

    let header = document.getElementsByClassName("vibback");
    let badge = document.createElement("button");
    badge.textContent = "copy frequencies";
    badge.onclick = () => {
	navigator.clipboard.writeText(output.join("\n")).then(() => {});
    };
    header[0].insertAdjacentElement("afterend", badge);
}
