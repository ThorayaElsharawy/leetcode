function isAnagram(s, t) {
    const S = s.split('').sort()
    const T = t.split('').sort()
    return S.join() === T.join();
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));