#!/usr/bin/env node

// Verification script to check build dependencies and module resolution
console.log('🔍 Verifying build environment...');

const fs = require('fs');
const path = require('path');

// Check critical UI components exist
const uiComponents = [
    'src/components/ui/card.tsx',
    'src/components/ui/button.tsx',
    'src/components/ui/badge.tsx'
];

console.log('📦 Checking UI components...');
let missingComponents = [];

uiComponents.forEach(component => {
    if (!fs.existsSync(component)) {
        missingComponents.push(component);
        console.log(`❌ Missing: ${component}`);
    } else {
        console.log(`✅ Found: ${component}`);
    }
});

// Check package.json
console.log('📄 Checking package.json...');
if (fs.existsSync('package.json')) {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    console.log(`✅ Package: ${pkg.name}@${pkg.version}`);
} else {
    console.log('❌ Missing package.json');
    process.exit(1);
}

// Check tsconfig.json paths
console.log('⚙️  Checking TypeScript configuration...');
if (fs.existsSync('tsconfig.json')) {
    const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
    if (tsconfig.compilerOptions && tsconfig.compilerOptions.paths) {
        console.log('✅ TypeScript path aliases configured');
        console.log('   @/* =>', tsconfig.compilerOptions.paths['@/*']);
    } else {
        console.log('❌ Missing TypeScript path aliases');
    }
} else {
    console.log('❌ Missing tsconfig.json');
}

// Check node_modules
console.log('📚 Checking dependencies...');
if (fs.existsSync('node_modules')) {
    try {
        const packageCount = fs.readdirSync('node_modules').length;
        console.log(`✅ node_modules contains ${packageCount} packages`);

        if (packageCount < 1000) {
            console.log(`⚠️  WARNING: Only ${packageCount} packages installed - expected ~1800+`);
            console.log('   This may cause module resolution issues');
        }

        // Check critical dependencies
        const criticalDeps = ['next', 'react', 'typescript'];
        let missingDeps = [];
        criticalDeps.forEach(dep => {
            if (fs.existsSync(`node_modules/${dep}`)) {
                console.log(`✅ Found critical dependency: ${dep}`);
            } else {
                console.log(`❌ Missing critical dependency: ${dep}`);
                missingDeps.push(dep);
            }
        });

        if (missingDeps.length > 0) {
            console.log(`❌ Missing critical dependencies: ${missingDeps.join(', ')}`);
            console.log('   This will cause build failures');
            // Don't exit here - let the main build script handle TypeScript installation
        }
    } catch (error) {
        console.log('❌ Error reading node_modules:', error.message);
    }
} else {
    console.log('❌ Missing node_modules directory');
    process.exit(1);
}
if (missingComponents.length > 0) {
    console.log('\n❌ Build verification failed - missing components');
    process.exit(1);
} else {
    console.log('\n✅ Build verification passed');
}