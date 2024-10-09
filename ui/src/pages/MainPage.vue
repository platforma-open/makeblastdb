<script setup lang="ts">
import { PlBlockPage, PlBtnGroup, PlBtnPrimary, PlFileInput, PlLogView, PlSlideModal, PlTextField } from '@platforma-sdk/ui-vue';
import { ref } from 'vue';
import { useApp } from '../app';

const app = useApp();

const alphabetOptions = [
  {
    text: "Nucleotide",
    value: "nucl"
  },
  {
    text: "Protein",
    value: "prot"
  }
]

const settingsAreShown = ref(true)
const showSettings = () => { settingsAreShown.value = true }
</script>

<template>
  <PlBlockPage>
    <template #title>Make BLAST Database</template>
    <template #append>
      <PlBtnPrimary :icon="'settings-2'" @click.stop="showSettings">Settings</PlBtnPrimary>
    </template>

    <PlLogView :value="app.model.outputs.log" />

    <PlSlideModal v-model="settingsAreShown">
      <template #title>Settings</template>

      <PlTextField v-model="app.model.args.title" label="Database title" clearable />

      <PlFileInput v-model="app.model.args.fastaFile" :progress="app.outputValues.importProgress" label="FASTA source"
        placeholder="Select FASTA file" fileDialogTitle="Select FASTA file" :extensions="['fasta', 'fa', 'fna']" clearable />

      <PlBtnGroup v-model="app.model.args.dataType" :options="alphabetOptions" label="Sequences type" />
    </PlSlideModal>

  </PlBlockPage>
</template>
