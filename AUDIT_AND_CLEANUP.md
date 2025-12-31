# 🔍 Audit & Cleanup Guide - Laptop Kantor Medcoenergi

## ⚠️ PENTING - Corporate Compliance

Panduan ini untuk memastikan laptop kantor (domain Medcoenergi) tetap bersih dan compliant setelah development portfolio project.

---

## 📊 Step 1: Audit Packages Terinstall

### A. Check Global Packages

```bash
# List semua global packages
npm list -g --depth=0

# Atau lebih detail
npm list -g --depth=0 > "%USERPROFILE%\Desktop\npm-audit-global.txt"
```

**Packages yang AMAN (biasanya sudah ada untuk work):**
- npm
- npx

**Packages yang mungkin TIDAK DIPERLUKAN untuk kerja:**
- create-next-app
- next
- gh-pages
- vercel
- netlify-cli
- any other CLI tools

### B. Check Local Project Packages

```bash
cd "C:\Development\Portofolio\aryafikriii.github.io"

# List all dependencies
npm list --depth=0 > "%USERPROFILE%\Desktop\npm-audit-local.txt"

# Check for licenses
npx license-checker --summary > "%USERPROFILE%\Desktop\licenses.txt"
```

### C. Review Licenses

Open `licenses.txt` dan check untuk:
- ❌ **GPL** licenses (copyleft, might require disclosure)
- ❌ **Commercial** licenses (require payment)
- ❌ **Proprietary** licenses (restricted usage)
- ✅ **MIT**, **ISC**, **BSD**, **Apache-2.0** (free & safe for personal use)

---

## 🗑️ Step 2: Project Cleanup

### A. Backup Build Output (Optional)

Jika ingin backup hasil build sebelum delete:

```bash
# Copy out folder ke flash drive atau cloud
xcopy "C:\Development\Portofolio\aryafikriii.github.io\out" "D:\Backup\portfolio-build" /E /I /H /Y

# Atau compress to ZIP
powershell Compress-Archive -Path "C:\Development\Portofolio\aryafikriii.github.io\out" -DestinationPath "%USERPROFILE%\Desktop\portfolio-build.zip"
```

### B. Delete Project Completely

```bash
# Delete entire project folder
rmdir /S /Q "C:\Development\Portofolio\aryafikriii.github.io"

# Delete Asset folder if not needed
rmdir /S /Q "C:\Development\Portofolio\Asset"

# Delete parent folder if empty
rmdir "C:\Development\Portofolio" 2>nul
```

### C. Clean npm Cache

```bash
# Clear npm cache
npm cache clean --force

# Verify cache is clean
npm cache verify
```

---

## 🧹 Step 3: Remove Node.js (Jika Tidak Diperlukan untuk Kerja)

### ⚠️ HANYA LAKUKAN JIKA Node.js TIDAK DIGUNAKAN UNTUK PROJECT KANTOR!

### A. Check Apakah Node.js Digunakan untuk Kerja

```bash
# Check project kantor yang pakai Node.js
dir /S /B "C:\Projects\node_modules" 2>nul
dir /S /B "C:\Work\node_modules" 2>nul
dir /S /B "D:\Projects\node_modules" 2>nul
```

**JIKA ADA RESULTS**: JANGAN uninstall Node.js!

### B. Uninstall Node.js (Jika Aman)

1. **Start Menu** → **Settings** → **Apps** → **Apps & features**
2. Search: **Node.js**
3. Click **Uninstall**
4. Follow wizard

### C. Clean Remaining Files

```bash
# Delete npm global folder
rmdir /S /Q "%APPDATA%\npm"

# Delete npm cache folder
rmdir /S /Q "%APPDATA%\npm-cache"

# Delete node_modules jika ada di user profile
rmdir /S /Q "%USERPROFILE%\node_modules" 2>nul
```

---

## 🔒 Step 4: Verify Clean State

### A. Check for Remaining Traces

```bash
# Check if Node.js still accessible
node --version
# Should show: 'node' is not recognized...

# Check if npm still accessible
npm --version
# Should show: 'npm' is not recognized...

# Search for node_modules folders
dir /S /B "C:\node_modules" 2>nul
dir /S /B "%USERPROFILE%\node_modules" 2>nul
```

### B. Check Environment Variables

1. **Start Menu** → Search: **Environment Variables**
2. Click **Edit the system environment variables**
3. Click **Environment Variables** button
4. Check **User variables** dan **System variables**:
   - Remove any paths to Node.js
   - Remove any paths to npm
   - Remove any paths to project folders

### C. Registry Cleanup (Advanced)

```bash
# Run Registry Editor
regedit

# Navigate to and DELETE (if exists):
HKEY_CURRENT_USER\Software\Node.js
HKEY_LOCAL_MACHINE\SOFTWARE\Node.js
```

**⚠️ WARNING**: Hati-hati saat edit registry! Hanya delete jika yakin.

---

## 📋 Step 5: Final Audit Checklist

Sebelum selesai, verify:

- [ ] All project folders deleted (`C:\Development\Portofolio`)
- [ ] npm cache cleared
- [ ] Node.js uninstalled (if not needed for work)
- [ ] `%APPDATA%\npm` folder deleted
- [ ] `%APPDATA%\npm-cache` folder deleted
- [ ] Environment variables cleaned
- [ ] No `node_modules` folders remaining
- [ ] `node --version` shows "not recognized"
- [ ] No suspicious processes running (check Task Manager)

---

## 🎯 Alternative: Keep Node.js But Document Usage

Jika Node.js diperlukan untuk kerja ATAU Anda ingin keep untuk future projects:

### Create Audit Document

```bash
# Create audit trail
echo "Node.js Audit Report - %DATE% %TIME%" > "%USERPROFILE%\Desktop\NodeJS-Audit.txt"
echo. >> "%USERPROFILE%\Desktop\NodeJS-Audit.txt"
echo "=== GLOBAL PACKAGES ===" >> "%USERPROFILE%\Desktop\NodeJS-Audit.txt"
npm list -g --depth=0 >> "%USERPROFILE%\Desktop\NodeJS-Audit.txt"
echo. >> "%USERPROFILE%\Desktop\NodeJS-Audit.txt"
echo "=== LICENSES ===" >> "%USERPROFILE%\Desktop\NodeJS-Audit.txt"
npx license-checker --summary >> "%USERPROFILE%\Desktop\NodeJS-Audit.txt"
```

Simpan file `NodeJS-Audit.txt` sebagai dokumentasi bahwa semua packages adalah **open source dengan free licenses**.

---

## 🚨 What to Do If Audit Finds Issues

### Issue: GPL Licensed Package Found

**Risk**: GPL requires derivative works to be open sourced
**Solution**:
- Document that this was for **personal portfolio** (not company product)
- Remove package: `npm uninstall -g <package-name>`
- If needed for work, consult IT/Legal department

### Issue: Commercial Package Without License

**Risk**: License violation, potential legal action
**Solution**:
- **IMMEDIATELY** uninstall: `npm uninstall -g <package-name>`
- Check if accidentally installed
- Report to IT department if needed for work
- Purchase license if required for legitimate work use

### Issue: Unknown Package Origin

**Risk**: Security vulnerability, malware
**Solution**:
- Run antivirus scan
- Uninstall immediately
- Report to IT Security team

---

## 📞 Escalation Contacts

Jika ada pertanyaan atau concerns:

1. **IT Department Medcoenergi**
   - Report any suspicious packages
   - Request guidance on allowed software

2. **Legal/Compliance**
   - Questions about licenses
   - Concerns about GPL/commercial software

3. **Security Team**
   - Suspicious packages or malware
   - Security audit requirements

---

## ✅ Safe Packages List (MIT/ISC/BSD Licensed)

Packages yang **AMAN** untuk personal development projects:

- Next.js (MIT)
- React (MIT)
- TypeScript (Apache-2.0)
- Tailwind CSS (MIT)
- Framer Motion (MIT)
- Lucide Icons (ISC)
- clsx (MIT)

All packages used in this portfolio project are **FREE and OPEN SOURCE** with permissive licenses.

---

**Last Updated**: December 31, 2024
**Prepared for**: Medcoenergi E&P Indonesia Corporate Compliance
**Project**: Personal Portfolio (Non-Commercial)
